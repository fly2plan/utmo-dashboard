import React from "react";
import { ArrayField, StringField, IntegerField, BooleanField, NumberField } from "./components";

const FlightPlanField = ({ forwardedKey, updateField, field, renderPlanRecursively, setHeader, path, index }: any) => {

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
    case 'integer':
      return (
        <IntegerField
          forwardedKey={forwardedKey}
          updateField={updateField}
          field={field}
          path={path}
          renderPlanRecursively={renderPlanRecursively}
        />
      );
    case 'number':
      return (
        <NumberField
          forwardedKey={forwardedKey}
          updateField={updateField}
          field={field}
          path={path}
          renderPlanRecursively={renderPlanRecursively}
        />
      );
    case 'boolean':
      return (
        <BooleanField
          forwardedKey={forwardedKey}
          updateField={updateField}
          field={field}
          path={path}
          renderPlanRecursively={renderPlanRecursively}
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
          index={index}
        />
      );
    default:
      return null;
  }
}

export default React.memo(FlightPlanField)