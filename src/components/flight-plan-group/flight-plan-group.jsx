import React, { useContext, useEffect, useState } from "react";
import { Accordion, AccordionContext } from "react-bootstrap"
import { prettify } from "../../utils"

const FlightPlanGroup = ({ forwardedKey, field, updateField, renderPlanRecursively, setClicked, path }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const [header, setHeader] = useState(prettify(forwardedKey));

  useEffect(() => {
    if (setClicked) {
      setClicked(activeEventKey);
    };
  }, [activeEventKey]);

  return (
    <Accordion.Item eventKey={forwardedKey}>
      <Accordion.Header>
        {header}
      </Accordion.Header>
      <Accordion.Body>
        <Accordion>
          {renderPlanRecursively({ field, updateField, renderPlanRecursively, setHeader, path: path })}
        </Accordion>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default React.memo(FlightPlanGroup)