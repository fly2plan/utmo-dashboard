import React, { useRef, useReducer, useCallback } from "react";
import { useState } from "react";
import { Accordion, Button, Form, ListGroup } from "react-bootstrap";
import { useMutation } from "react-query";
import { FlightPlanField, FlightPlanGroup } from "..";
import { API } from "../../utils";

const renderPlanRecursively = ({field, updateField, renderPlanRecursively, setClicked, setHeader}) => Object.entries(field).map(([key, value]) => {
  if (value.type === 'object') {
    return (
      <FlightPlanGroup
        forwardedKey={key}
        field={value.properties}
        updateField={updateField}
        renderPlanRecursively={renderPlanRecursively}
        setClicked={setClicked}
      />
    )
  }
  return (
    <FlightPlanField
      forwardedKey={key}
      updateField={updateField}
      field={value}
      renderPlanRecursively={renderPlanRecursively}
      setHeader={setHeader}
    />
  )
})

const updateFlightPlan = (state, action) => {
  const newState = { ...state };
  return newState;
}

const Display = ({ flightPlanFields, updateField }) => {
  return (
    <Accordion>
      {renderPlanRecursively({field: flightPlanFields, updateField, renderPlanRecursively})}
    </Accordion>
  )
}

const FlightPlan = ({ validate }) => {
  const [validated, setValidated] = useState(false);
  const flightPlanFieldsRef = useRef(validate.schema.definitions.ScheduledDroneAircraftMovement.properties);
  const flightPlanSubmission = useMutation(flightPlan => API.put('/flightChain', flightPlan));
  const [flightPlan, updateField] = useReducer(updateFlightPlan, {});

  const handleSubmit = useCallback((event) => {
    // event.preventDefault();
    // console.log(validator.validate(flightPlan, validator.schemas['/flightBase']));
    // if (validator.validate(flightPlan, validator.schemas['/flightBase'])) {
    //   flightPlanSubmission.mutate(flightPlan);
    // } else {
    //   console.log(validator.errors);
    // }
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