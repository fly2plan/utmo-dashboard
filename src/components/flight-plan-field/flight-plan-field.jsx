import React from "react";
import { ArrayField, StringField } from "./components";

const FlightPlanField = ({ forwardedKey, updateField, field, renderPlanRecursively, setHeader, path }) => {

  switch (field.type) {
    case 'string':
      return (
        <StringField
          forwardedKey={forwardedKey}
          updateField={updateField}
          field={field}
          setHeader={setHeader}
          path={path}
        />
      );
    case 'array':
      return (
        <ArrayField
          forwardedKey={forwardedKey}
          updateField={updateField}
          field={field}
          path={path}
          renderPlanRecursively={renderPlanRecursively}
        />
      );
    default:
      return null;
  }
}

export default React.memo(FlightPlanField)