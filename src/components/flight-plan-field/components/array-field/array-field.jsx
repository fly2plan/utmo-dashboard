import React, { useRef, useReducer, useState } from "react";
import { Accordion, ListGroup, OverlayTrigger, Button } from "react-bootstrap";
import { prettify } from "../../../../utils";
import { Info } from "../../../";

const init = ({ field, forwardedKey }) => {
  const nextKey = `${forwardedKey}1`;
  return { [nextKey]: field };
}

const mutateFields = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'add':
      newState[action.key] = action.content;
      return newState;
    case 'remove':
      delete newState[action.key];
      console.log(newState);
      return newState;
  }
}

const ArrayField = ({ forwardedKey, updateField, field, path, renderPlanRecursively }) => {
  const prettyKeyRef = useRef(prettify(forwardedKey));
  const prettyKeyCapitalsRef = useRef(prettify(forwardedKey).match(/[A-Z]/g));
  const [nextKeyInteger, setNextKeyInteger] = useState(1);
  const [clicked, setClicked] = useState(null);
  const [fields, dispatchField] = useReducer(mutateFields, { forwardedKey, field: field.items }, init);

  return (
    <div className="flight-plan-array-field">
      <ListGroup horizontal>
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
            updateField({ path: path.concat(`/[${clicked}]`), type: 'remove', cb: () => dispatchField({type: 'remove', key: clicked }) })
          }}
        >
          -
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={(event) => {
            event.preventDefault();
            const nextKey = `${forwardedKey}${nextKeyInteger + 1}`;
            dispatchField({ type: 'add', key: nextKey, content: field.items });
            setNextKeyInteger(nextKeyInteger => nextKeyInteger + 1);
          }}
        >
          +
        </ListGroup.Item>
      </ListGroup>
      <Accordion>
        {renderPlanRecursively({ field: fields, updateField, path: path, renderPlanRecursively, setClicked, inArray: true })}
      </Accordion>
    </div>
  )
}

export default React.memo(ArrayField)