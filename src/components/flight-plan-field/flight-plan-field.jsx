import React from "react";
import { ArrayField, StringField } from "./components";

const FlightPlanField = ({ forwardedKey, updateField, field, renderPlanRecursively, setHeader }) => {
  switch (field.type) {
    case 'string':
      return <StringField forwardedKey={forwardedKey} updateField={updateField} field={field} setHeader={setHeader} />;
    case 'array':
      return <ArrayField forwardedKey={forwardedKey} updateField={updateField} field={field} renderPlanRecursively={renderPlanRecursively} />;
    default:
      return null;
  }
}

export default React.memo(FlightPlanField)