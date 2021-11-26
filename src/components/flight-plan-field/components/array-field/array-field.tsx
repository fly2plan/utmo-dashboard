import React, { useRef, useReducer, useState } from "react";
import { Accordion, ListGroup, OverlayTrigger, Button } from "react-bootstrap";
import { prettify } from "../../../../utils";
import { Info } from "../../..";
import './array-field.css';

const init = ({ field, forwardedKey }: any) => {
  const nextKey = `${forwardedKey}1`;
  return { [nextKey]: field };
}

const mutateFields = (state: any, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case 'add':
      newState[action.key] = action.content;
      return newState;
    case 'remove':
      delete newState[action.key];
      return newState;
    default:
      return newState;
  }
}

const ArrayField = ({ forwardedKey, updateField, field, path, renderPlanRecursively }: any) => {
  const prettyKeyRef = useRef(prettify(forwardedKey));
  const prettyKeyCapitalsRef = useRef(prettify(forwardedKey).match(/[A-Z]/g));
  const [nextKeyInteger, setNextKeyInteger] = useState(1);
  const [clicked, setClicked] = useState(null);
  const [index, setIndex] = useState(0);
  const [fields, dispatchField] = useReducer(mutateFields, { forwardedKey, field: field.items }, init);
  const splitPath = useRef(path.split('/'))

  return (
    <div
      className="flight-plan-array-field"
    >
      <ListGroup horizontal >
        <ListGroup.Item bsPrefix='key-acronym' className="array-field-overlay">
          <OverlayTrigger
            placement="right"
            delay={{ show: 0, hide: 100 }}
            overlay={<Info> {prettyKeyRef.current} </Info>}
          >
            <Button className="rounded-0 array-field-overlay-button" variant="primary" >
              {prettyKeyCapitalsRef.current.length > 1 ? prettyKeyCapitalsRef.current.join('') : prettyKeyRef.current}
            </Button>
          </OverlayTrigger>
        </ListGroup.Item>
        <ListGroup.Item
          action
          disabled={clicked && Object.keys(fields).length > 1 ? false : true}
          onClick={(event) => {
            event.preventDefault();
            updateField({ path: path.concat(`/[${clicked}-${index}]`), type: 'remove', cb: () => dispatchField({ type: 'remove', key: clicked }) })
          }}
        >
          Remove
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
          Add
        </ListGroup.Item>
      </ListGroup>
      <Accordion>
        {renderPlanRecursively({ field: fields, updateField, path: path, renderPlanRecursively, setClicked, setIndex, inArray: true })}
      </Accordion>
    </div>
  )
}

export default React.memo(ArrayField)