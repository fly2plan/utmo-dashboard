import { useRef, useReducer, useCallback, useState } from "react";
import { Accordion, Button, Form, Modal } from "react-bootstrap";
import { useUser } from "../../contexts/auth";
import { useMutation } from "react-query";
import { FlightPlanField, FlightPlanGroup } from "..";
import { API, navigateToObjectEnd } from "../../utils";
import { AxiosResponse } from "axios";
import isEqual from "lodash.isequal";
import './flight-plan.css';
import 'fs'


const parsedFlightPlan: (flightPlan: any) => any = (flightPlan: any) => {

  const removeEmptyValues = (_: any, value: any) => {
    switch (typeof value) {
      case 'object':
        if (value !== null && Object.keys(value).length !== 0) {
          return value
        }
        break;
      case 'number':
        if (value !== 0) {
          return value
        }
        break;
      default:
        if (value !== '') {
          return value
        }
    }
  }

  let stringifiedFlightPlan = JSON.stringify(flightPlan, removeEmptyValues, 2);

  if (stringifiedFlightPlan === undefined) {
    return flightPlan;
  }

  let newFlightPlan = JSON.parse(stringifiedFlightPlan, removeEmptyValues);

  if (isEqual(flightPlan, newFlightPlan)) {
    return flightPlan;
  } else {
    return parsedFlightPlan(newFlightPlan);
  }
}

const fieldRankings = ['array', 'object', 'integer', 'number', 'string', 'boolean']

const compareFields = (a: any, b: any): number => {
  const [, valueA] = a
  const [, valueB] = b
  const aRanking = fieldRankings.indexOf(valueA.type);
  const bRanking = fieldRankings.indexOf(valueB.type);
  return aRanking - bRanking
}


const renderPlanRecursively = ({ field, updateField, renderPlanRecursively, setClicked, setIndex, setHeader, path, inArray = false }: any) => Object.entries(field).sort(compareFields).map(([key, value]: any, index: number) => {

  return (
    <div key={key.replace(/\s/g, '')} className="flight-plan-div">
      {value.type === 'object' ? (
        <FlightPlanGroup
          forwardedKey={key.replace(/\s/g, '')}
          field={value.properties}
          updateField={updateField}
          renderPlanRecursively={renderPlanRecursively}
          setClicked={setClicked}
          setIndex={setIndex}
          index={index}
          path={inArray ? `${path.concat(`/[${key.replace(/\s/g, '')}-${index}]`)}` : path.concat(`/${key.replace(/\s/g, '')}`)}
        />
      ) : (
        <FlightPlanField
          forwardedKey={key.replace(/\s/g, '')}
          updateField={updateField}
          field={value}
          renderPlanRecursively={renderPlanRecursively}
          setHeader={setHeader}
          path={inArray ? `${path.concat(`/[${key.replace(/\s/g, '')}-${index}]`)}` : path.concat(`/${key.replace(/\s/g, '')}`)}
        />
      )}
    </div>
  )
})

const updateFlightPlan = (state: any, action: any) => {
  const path = action.path.split('/').slice(1);
  const segmentInArray = /\[(.*?)\]/;

  let newState = { ...state };
  let indicesOfArrayFields: number[] = [];

  // Construct a branch of the object which satisfies the schema
  let { resolvedPath, updateToFlightPlan } = path.reduce(({ resolvedPath, updateToFlightPlan }: any, segment: any, index: any, assets: any) => {
    let [updateToFlightPlanEnd,] = navigateToObjectEnd(updateToFlightPlan, [...resolvedPath]);
    if (segmentInArray.test(assets[index + 1])) {
      if (assets.length > 1 && segmentInArray.test(assets[index - 1])) {
        updateToFlightPlanEnd.push({ [segment]: [] });
        resolvedPath.push(0, segment);
      } else {
        updateToFlightPlanEnd[segment] = [];
        resolvedPath.push(segment);
      };
    } else if (assets.length > 1 && segmentInArray.test(assets[index - 1])) {
      if (index === assets.length - 1) {
        updateToFlightPlanEnd.push({ [segment]: action.value });
      } else {
        updateToFlightPlanEnd.push({ [segment]: {} });
      }
      resolvedPath.push(0, segment);
    } else if (segmentInArray.test(assets[index])) {
      let arraySegment = segment.slice(1, segment.length - 1);
      indicesOfArrayFields.push(parseInt(arraySegment.split('-')[1]));
    } else if (index === assets.length - 1) {
      resolvedPath.push(segment);
      updateToFlightPlanEnd[segment] = action.value;
    } else {
      resolvedPath.push(segment);
      updateToFlightPlanEnd[segment] = {};
    }
    return { resolvedPath, updateToFlightPlan };
  }, { resolvedPath: [], updateToFlightPlan: {} })

  if (Object.keys(newState).length === 0) {
    newState = updateToFlightPlan;
    return newState;
  }

  let objectPath: any[] = []

  resolvedPath.forEach((segment: any,) => {
    if (segment === 0) {
      objectPath.push(indicesOfArrayFields.shift());
    } else {
      objectPath.push(segment);
    }
  })

  if (action.type === 'add') {
    let [objectToChange, remainingPath] = navigateToObjectEnd(newState, [...objectPath]);
    let pathToObjectToChange = [...objectPath].slice(0, objectPath.length - remainingPath.length);
    let [objectToAdd,] = navigateToObjectEnd(updateToFlightPlan, pathToObjectToChange.map(segment => Number.isInteger(segment) ? 0 : segment));

    switch (typeof objectToChange) {
      case 'object':
        const objectToChangeIsArray = Array.isArray(objectToChange);
        if (objectToChangeIsArray) {
          if (remainingPath[0] === objectToChange.length) {
            objectToChange.push(objectToAdd[0]);
          } else {
            Object.assign(objectToChange[0], Object.values(objectToAdd)[0]);
          }
        } else {
          Object.assign(objectToChange, objectToAdd);
        }
        break;
      default:
        let [parentOfObjectToChange,] = navigateToObjectEnd(newState, [...objectPath].slice(0, objectPath.length - 1));
        let [parentOfObjectToAdd,] = navigateToObjectEnd(updateToFlightPlan, [...resolvedPath].slice(0, resolvedPath.length - 1));
        Object.assign(parentOfObjectToChange, parentOfObjectToAdd);
        break;
    }
  } else if (action.type === 'remove') {
    let [objectToChange,] = navigateToObjectEnd(newState, [...objectPath]);
    const indexOfObjectToChange = indicesOfArrayFields[indicesOfArrayFields.length - 1];
    objectToChange.splice(indexOfObjectToChange, 1);
    action.cb();
  }

  return newState;
}

const Display = ({ flightPlanFields, updateField }: any) => {
  return (
    <Accordion>
      {renderPlanRecursively({ field: flightPlanFields, updateField, renderPlanRecursively, path: '' })}
    </Accordion>
  );
};

const FlightPlan = ({ validate }: any) => {
  const user = useUser();
  const [validated, setValidated] = useState(false);
  const flightPlanFieldsRef = useRef(validate.schema.definitions.UTMFlight.properties);
  const submitFlightPlan = useMutation<AxiosResponse<any, any>, any, any>(
    flightPlan => {
      return API.put('/flightChain', flightPlan, {
        headers: {
          Authorization: 'Bearer ' + user.jwt
        }
      })
    }
  );
  const [flightPlan, updateField] = useReducer(updateFlightPlan, {});
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => submitFlightPlan.reset(), 1000);
  }

  const handleCheck = useCallback((event) => {
    event.preventDefault();
    if (validate(flightPlan)) {
      setShow(true);
    } else {
      console.log(validate.errors);
    };
  }, [flightPlan, validate]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const checkedFlightPlan = parsedFlightPlan(flightPlan)
    submitFlightPlan.mutate(checkedFlightPlan);
  }, [flightPlan])

  return (
    <Form noValidate className='flight-plan-form' validated={validated} onSubmit={handleCheck}>
      <Display flightPlanFields={flightPlanFieldsRef.current} updateField={updateField} />
      <div className="flight-plan-check-div">
        <Button
          variant="primary"
          type="submit"
        >
          Check
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>UTM Flight Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <pre className="flight-plan-check-pre">
            {JSON.stringify(parsedFlightPlan(flightPlan), null, 2)}
          </pre>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            <div className='flight-plan-success-container'>
              {submitFlightPlan.isLoading ? (
                <div className='flight-plan-spinner' />
              ) : (
                <div className='submission-error'>
                  {submitFlightPlan.isError ? (
                    `An error occurred: ${submitFlightPlan.error.message}`
                  ) : null}
                  {submitFlightPlan.isSuccess ? (
                    <span className="checkmark">
                      <div className="checkmark_stem"></div>
                      <div className="checkmark_kick"></div>
                    </span>
                  ) : null}
                  {submitFlightPlan.isIdle ? (
                    "Submit"
                  ) : null}
                </div>
              )}
            </div>
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default FlightPlan