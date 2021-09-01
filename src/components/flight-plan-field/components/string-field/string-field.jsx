import React, { useRef, useEffect, useState } from "react"
import { Button, Form, OverlayTrigger } from "react-bootstrap";
import { Info } from "../../../";
import { prettify } from "../../../../utils"

const StringField = ({ forwardedKey, updateField, field, setHeader }) => {
  const [input, setInput] = useState(null);
  const prettyKeyRef = useRef(prettify(forwardedKey));

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  useEffect(() => {
    updateField({ type: forwardedKey, value: input });
    if (setHeader && input && forwardedKey === 'Value') {
      setHeader(input);
    };
  }, [input]);

  return (
    <div className="flight-plan-string-field">
    <Form.Group key={forwardedKey} className="mb-3" controlId="formBasicEmail">
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
        type="textarea"
        value={input}
        placeholder={`Enter ${prettyKeyRef.current}`}
        onChange={handleChange}
      />
      <Form.Text className="text-muted">
        Error/Success field
      </Form.Text>
    </Form.Group>
    </div>
  )
}

export default React.memo(StringField)