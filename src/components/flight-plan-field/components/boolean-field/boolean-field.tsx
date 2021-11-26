import React, { useRef, useEffect, useState } from "react"
import { Button, Form, OverlayTrigger } from "react-bootstrap";
import { Info } from "../../..";
import { prettify } from "../../../../utils";
import './boolean-field.css';

const BooleanField = ({ forwardedKey, updateField, field, setHeader, path }: any) => {
  const [input, setInput] = useState(false);
  const prettyKeyRef = useRef(prettify(forwardedKey));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.checked);
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
      <Form.Check type="checkbox" label="Tick if true" checked={input} onChange={handleChange} />
      {/* <Form.Text className="text-muted">
        Error/Success field
      </Form.Text> */}
    </div>
  )
}

export default React.memo(BooleanField)