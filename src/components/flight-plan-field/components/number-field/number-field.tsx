import React, { useRef, useEffect, useState } from "react"
import { Button, Form, OverlayTrigger } from "react-bootstrap";
import { Info } from "../../../";
import { prettify } from "../../../../utils";
import './number-field.css';

const NumberField = ({ forwardedKey, updateField, field, setHeader, path }: any) => {
  const [input, setInput] = useState(0);
  const prettyKeyRef = useRef(prettify(forwardedKey));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(parseFloat(e.target.value));
  }

  useEffect(() => {
    updateField({ path, type: 'add', value: input });
    if (setHeader && input && forwardedKey === 'Value') {
      setHeader(input);
    };
  }, [input]);

  return (
    <div
      className="flight-plan-boolean-field"
    >
      <Form.Label>
        <OverlayTrigger
          placement="right"
          delay={{ show: 0, hide: 100 }}
          overlay={<Info> {field.description} </Info>}
        >
          <Button variant="secondary">{prettyKeyRef.current}</Button>
        </OverlayTrigger>
      </Form.Label>
      <Form.Control
        type="number"
        value={input}
        placeholder={`Enter ${prettyKeyRef.current}`}
        onChange={handleChange}
      />

      {/* <Form.Text className="text-muted">
        Error/Success field
      </Form.Text> */}
    </div>
  )
}

export default React.memo(NumberField)