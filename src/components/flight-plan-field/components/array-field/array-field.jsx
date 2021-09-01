import React, { useRef, useReducer, useState } from "react";
import { Accordion, ListGroup, OverlayTrigger, Button } from "react-bootstrap";
import { prettify } from "../../../../utils";
import { Info } from "../../../";

const init = ({ field, prettyKey }) => {
  const firstDisplayedKey = `${prettyKey} 1`;
  return { [firstDisplayedKey]: field };
}

const mutateFields = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'add':
      newState[action.key] = action.content;
      return newState;
    case 'subtract':
      delete newState[action.key];
      return newState;
  }
}

const ArrayField = ({ forwardedKey, updateField, field, renderPlanRecursively }) => {
  const prettyKeyRef = useRef(prettify(forwardedKey));
  const prettyKeyCapitalsRef = useRef(prettify(forwardedKey).match(/[A-Z]/g));
  const [nextKeyInteger, setNextKeyInteger] = useState(1);
  const [clicked, setClicked] = useState(null);
  const [fields, dispatchField] = useReducer(mutateFields, { prettyKey: prettyKeyRef.current, field: field.items }, init);

  return (
    <div className="flight-plan-array-field">
      <ListGroup horizontal key={forwardedKey}>
        <ListGroup.Item bsPrefix='key-acronym'>
          <OverlayTrigger
            placement="right"
            delay={{ show: 0, hide: 100 }}
            overlay={<Info> {prettyKeyRef.current} </Info>}
          >
            <Button variant="primary">
              {prettyKeyCapitalsRef.current.length > 1 ? prettyKeyCapitalsRef.current.join('') : prettyKeyRef.current}
            </Button>
          </OverlayTrigger>
        </ListGroup.Item>
        <ListGroup.Item 
          action
          disabled={clicked && Object.keys(fields).length > 1 ? false : true}
          onClick={(event) => {
            event.preventDefault();
            dispatchField({ type: 'subtract', key: clicked });
          }}
        >
          -
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={(event) => {
            event.preventDefault();
            const nextDisplayedKey = `${prettyKeyRef.current} ${nextKeyInteger + 1}`;
            dispatchField({ type: 'add', key: nextDisplayedKey, content: field.items });
            setNextKeyInteger(nextKeyInteger => nextKeyInteger + 1);
          }}
        >
          +
        </ListGroup.Item>
      </ListGroup>
      <Accordion>
        {renderPlanRecursively({field: fields, updateField, renderPlanRecursively, setClicked})}
      </Accordion>
    </div>
  )
}

export default React.memo(ArrayField)