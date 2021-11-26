import React, { useContext, useEffect, useState, useRef } from "react";
import { Accordion, AccordionContext, Form } from "react-bootstrap";
import { prettify } from "../../utils";
import './flight-plan-group.css';

const FlightPlanGroup = ({ forwardedKey, field, updateField, renderPlanRecursively, setClicked, setIndex, index, path }: any) => {
  const { activeEventKey } = useContext(AccordionContext);
  const [header, setHeader] = useState(prettify(forwardedKey));
  const splitPath = useRef(path.split('/'))
  const borderedByArrayRef = useRef(splitPath.current.length > 2 ? /\[(.*?)\]/.test(splitPath.current[splitPath.current.length - 2]) : false)

  useEffect(() => {
    if (setClicked) {
      setClicked(activeEventKey);
      setIndex(index);
    };
  }, [activeEventKey]);

  return (
    <div
      className="flight-plan-group"
    // style={borderedByArrayRef.current ? {
    //   borderRadius: '5px',
    //   border: `2px solid rgba(13,110,253, 0.${splitPath.current.length})`
    // } : null}
    >
      <Accordion.Item eventKey={forwardedKey}>
        <Accordion.Header className="flight-plan-group-label">
          {header}
        </Accordion.Header>
        <Accordion.Body>
          <Accordion>
            <Form.Group className="mb-1" controlId={`${forwardedKey}`}>
              {renderPlanRecursively({ field, updateField, renderPlanRecursively, setHeader, path: path })}
            </Form.Group>
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  )
}

export default React.memo(FlightPlanGroup)