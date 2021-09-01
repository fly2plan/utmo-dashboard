import React from "react";
import { useContext, useEffect, useState } from "react"
import { Accordion, AccordionContext } from "react-bootstrap"
import { prettify } from "../../utils"

const FlightPlanGroup = ({ forwardedKey, field, updateField, renderPlanRecursively, setClicked }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const [header, setHeader] = useState(prettify(forwardedKey));

  useEffect(() => {
    setHeader(forwardedKey);
  }, [forwardedKey]);

  useEffect(() => {
    if (setClicked) {
      setClicked(activeEventKey);
    };
  }, [activeEventKey]);

  return (
    <div className="flight-plan-group">
      <Accordion.Item key={forwardedKey} eventKey={forwardedKey}>
        <Accordion.Header>
          {header}
        </Accordion.Header>
        <Accordion.Body>
          <Accordion>
            {renderPlanRecursively({field, updateField, renderPlanRecursively, setHeader})}
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  )
}

export default React.memo(FlightPlanGroup)