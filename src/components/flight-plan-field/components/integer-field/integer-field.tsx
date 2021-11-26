import React, { useRef, useEffect, useState } from "react"
import { Button, Form, OverlayTrigger } from "react-bootstrap";
import { Info } from "../../..";
import { prettify } from "../../../../utils";
import './integer-field.css';

const defaultValue: (path: string[]) => number = (path: string[]) => {
  if (path[path.length - 1] === "FutureMaximumTakeOffWeight") {
    return 240
  } else {
    return 0
  }
}

const IntegerField = ({ forwardedKey, updateField, field, setHeader, path }: any) => {
  const [input, setInput] = useState(defaultValue(path.split('/')));
  const prettyKeyRef = useRef(prettify(forwardedKey));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(parseInt(e.target.value));
  }

  useEffect(() => {
    updateField({ path, type: 'add', value: input });
    if (setHeader && input && forwardedKey === 'Value') {
      setHeader(input);
    };
  }, [input]);

  return (
    <div
      className="flight-plan-integer-field"
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
{/* 
      <Form.Text className="text-muted">
        Error/Success field
      </Form.Text> */}
    </div>
  )
}

export default React.memo(IntegerField)