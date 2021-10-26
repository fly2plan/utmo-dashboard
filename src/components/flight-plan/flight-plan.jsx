import React, { useRef, useReducer, useCallback, useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { FlightPlanField, FlightPlanGroup } from "..";
import { API, navigateToObjectEnd } from "../../utils";
import 'fs'

const renderPlanRecursively = ({ field, updateField, renderPlanRecursively, setClicked, setHeader, path, inArray }) => Object.entries(field).map(([key, value]) => {

  if (value.type === 'object') {
    return (
      <div key={key.replace(/\s/g, '')} className="flight-plan-group">
        <FlightPlanGroup
          forwardedKey={key.replace(/\s/g, '')}
          field={value.properties}
          updateField={updateField}
          renderPlanRecursively={renderPlanRecursively}
          setClicked={setClicked}
          path={inArray ? `${path.concat(`/[${key.replace(/\s/g, '')}]`)}` : path.concat(`/${key.replace(/\s/g, '')}`)}
        />
      </div>
    )
  }
  return (
    <div key={key.replace(/\s/g, '')}>
      <FlightPlanField
        forwardedKey={key.replace(/\s/g, '')}
        updateField={updateField}
        field={value}
        renderPlanRecursively={renderPlanRecursively}
        setHeader={setHeader}
        path={inArray ? `${path.concat(`/[${key.replace(/\s/g, '')}]`)}` : path.concat(`/${key.replace(/\s/g, '')}`)}
      />
    </div>
  )
})

const removeFromArray = (array, objectToRemove) => {
  const collectedObjects = [];
  while (Object.keys(objectToRemove)[0] !== Object.keys(array[0])[0]) {
    collectedObjects.push(array.shift());
  };
  array.shift();
  array.unshift(...collectedObjects);
};

const addToArray = (array, objectToAdd) => {
  let isNewArrayEntry = true
  for (const item of array) {
    if (Object.keys(item).includes(Object.keys(objectToAdd)[0])) {
      isNewArrayEntry = false
      const index = Object.keys(item).indexOf(Object.keys(objectToAdd)[0]);
      Object.assign(Object.values(item)[index], Object.values(objectToAdd)[0]);
    }
  }
  if (isNewArrayEntry) {
    array.push(objectToAdd)
  }
}

const updateFlightPlan = (state, action) => {
  const path = action.path.split('/').slice(1);
  const segmentInArray = /\[(.*?)\]/;

  // Construct a branch of the object which satisfies the schema
  let { resolvedPath, updateToFlightPlan } = path.reduce(({ resolvedPath, updateToFlightPlan }, segment, index, assets) => {
    let [updateToFlightPlanEnd,] = navigateToObjectEnd(updateToFlightPlan, [...resolvedPath]);
    if (segmentInArray.test(assets[index + 1])) {
      resolvedPath.push(segment);
      updateToFlightPlanEnd[segment] = [];
    } else if (segmentInArray.test(assets[index])) {
      const parsedAsset = segment.slice(1, segment.length - 1);
      updateToFlightPlanEnd.push({ [parsedAsset]: {} });
      resolvedPath.push(0, parsedAsset);
    } else if (index === assets.length - 1) {
      resolvedPath.push(segment);
      updateToFlightPlanEnd[segment] = action.value ? action.value : '';
    } else {
      resolvedPath.push(segment);
      updateToFlightPlanEnd[segment] = {};
    }
    return { resolvedPath, updateToFlightPlan };
  }, { resolvedPath: [], updateToFlightPlan: {} });

  if (Object.keys(state).length === 0) {
    return Object.assign({}, updateToFlightPlan);
  }

  // If the object is nested in an array
  if (resolvedPath.includes(0)) {
    // Locate the array entry which is located closest to the tail of the branch
    const indexOfArrayEntry = resolvedPath.length - [...resolvedPath].reverse().indexOf(0) - 1;
    const [arrayEntry, ] = navigateToObjectEnd(updateToFlightPlan, resolvedPath.slice(0, indexOfArrayEntry + 1));
    // Attempt to navigate to the path segment of the object which satisfies the schema
    const [objectToChange, remainingPath, isNewArrayEntry] = navigateToObjectEnd(state, resolvedPath.slice(0, indexOfArrayEntry));

    // If there is no remaining path i.e. the final path segment has been reached, add/remove the end of the constructed object
    if (remainingPath.length === 0) {
      if (action.type === 'add') {
        console.log(resolvedPath.slice(0, indexOfArrayEntry));
        addToArray(objectToChange, arrayEntry);
      } else {
        removeFromArray(objectToChange, arrayEntry);
        action.cb();
      }
      // Otherwise add the constructed object following the path segment that was reached
    } else {
      const indexFromWhichToAddObject = resolvedPath.slice(0, indexOfArrayEntry).length - remainingPath.length - 1;
      const pathToObject = resolvedPath.slice(0, indexFromWhichToAddObject + 1);
      const [objectToAdd,] = navigateToObjectEnd(updateToFlightPlan, pathToObject);
      if (isNewArrayEntry) {
        objectToChange.push(objectToAdd[0]);
      } else {
        Object.assign(objectToChange, objectToAdd);
      }
    }
    // Otherwise it is an object that is possibly nested in an object
  } else {
    Object.assign(state, updateToFlightPlan);
  }

  const newState = { ...state };
  console.log(newState);
  return newState;
}

const Display = ({ flightPlanFields, updateField }) => {
  return (
    <Accordion>
      {renderPlanRecursively({ field: flightPlanFields, updateField, renderPlanRecursively, path: '' })}
    </Accordion>
  )
}

const FlightPlan = ({ validate }) => {
  const [validated, setValidated] = useState(false);
  const flightPlanFieldsRef = useRef(validate.schema.definitions.ScheduledDroneAircraftMovement.properties);
  const flightPlanSubmission = useMutation(flightPlan => API.put('/flightChain', flightPlan));
  const [flightPlan, updateField] = useReducer(updateFlightPlan, {});

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (validate(flightPlan)) {
      //TODO(harrymknight) If schema is valid then submit to FlightChain API endpoint
      alert("schema is valid")
    } else {
      console.log(validate.errors);
    }
  }, [flightPlan, flightPlanSubmission, validate])

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Display flightPlanFields={flightPlanFieldsRef.current} updateField={updateField} />
      {flightPlanSubmission.isLoading ? (
        'Submitting Flight Plan'
      ) : (
        <>
          <Button
            variant="success"
            type="submit"
          >
            Submit
          </Button>
          <div className='submission-error'>
            {flightPlanSubmission.isError ? (
              `An error occurred: ${flightPlanSubmission.error.message}`
            ) : null}

            {flightPlanSubmission.isSuccess ? (
              `Flight Plan submitted:\n ${JSON.stringify(flightPlanSubmission.data)}`
            ) : null}
          </div>
        </>
      )}
    </Form>
  );
}

export default FlightPlan