import React, { useRef, useEffect, useState } from "react"
import { Button, Form, OverlayTrigger } from "react-bootstrap";
import { Info } from "../../..";
import { prettify } from "../../../../utils";
import './string-field.css';

const defaultValue: (path: string[]) => string = (path: string[]) => { 
  //Hack default values for QRM
  if (path.length > 2) {
    if (path[path.length - 1] === "Value") {
      if (path[path.length - 2] === "ActivityType") {
        return "Commercial"
      } else if (path[path.length - 2] === "Activity") {
        return "T4 Ground Facilities Inspection, LHR"
      } else if (path[path.length - 2] === "PlannedDestinationLocation") {
        return "-0.450111,51.458677"
      } else if (path[path.length - 2] === "PlannedOriginLocation") {
        return "-0.446072,51.461470"
      }
    } else if (path[path.length - 1] === "Description") {
      if (path[path.length - 2] === "ScheduledAircraftMovementStatus") {
        return "Pending"
      } else if (path[path.length - 2] === "AircraftTransportEquipment") {
        return "Serial"
      }
    } else if (path[path.length - 1] === "Identifier") {
      if (path[path.length - 2] === "ScheduledDroneAircraftMovementIdentification") {
        return "harrysFlight16"
      } else if (path[path.length - 2] === "AircraftTransportEquipment") {
        return "123DEF"
      }
    } else if (path[path.length - 1] === "Code") {
      if (path[path.length - 2] === "ScheduledAircraftMovementStatus") {
        return "1"
      }
    }
  }
  let startTime = new Date();
  let endTime = new Date(startTime.valueOf() + 22 * 60000)
  let parsedStartTime = (startTime.toISOString()).replace(/:[0-9]{2}\.[0-9]{3}Z$/, ':00Z')
  let parsedEndTime = (endTime.toISOString()).replace(/:[0-9]{2}\.[0-9]{3}Z$/, ':00Z')

  if (path[path.length - 1] === "CalculatedTakeOffTimeCTOT") {
    return parsedStartTime
  } else if (path[path.length - 1] === "ScheduledInBlockTimeSIBT") {
    return parsedEndTime
  } else if (path[path.length - 1] === "ScheduledOffBlockTimeSOBT") {
    return parsedStartTime
  } else if (path[path.length - 1] === "TargetOffBlockTimeTOBT") {
    return parsedStartTime
  } else if (path[path.length - 1] === "originDate") {
    return "2021-11-23"
  } else if (path[path.length - 1] === "TargetTakeOffTimeTTOT") {
    return parsedStartTime
  } else if (path[path.length - 1] === "TargetLandingTimeTLDT") {
    return parsedEndTime
  } else if (path[path.length - 1] === "Summary") {
    return "Aerial Inspection Flight"
  } else if (path[path.length - 1] === "FutureMaximumTakeOffWeight") {
    return "240"
  } else if (path[path.length - 1] === "AircraftBodyType") {
    return "Rotary"
  } else if (path[path.length - 1] === "Registration") {
    return "AAA111"
  } else {
    return ''
  }
}

const StringField = ({ forwardedKey, updateField, field, setHeader, path }: any) => {
  const [input, setInput] = useState(defaultValue(path.split('/')));
  const prettyKeyRef = useRef(prettify(forwardedKey));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    updateField({ path, type: 'add', value: input });
    // if (setHeader && input && forwardedKey === 'Value') {
    //   setHeader(`${forwardedKey}: ${input}`);
    // };
  }, [input]);

  return (
    <div
      className="flight-plan-string-field"
    >
      <Form.Label>
        {field.description ? (
          <OverlayTrigger
            placement="right"
            delay={{ show: 0, hide: 100 }}
            overlay={<Info> {field.description} </Info>}
          >
            <Button variant="secondary">{prettyKeyRef.current}</Button>
          </OverlayTrigger>
        ) : (
          <Button variant="secondary">{prettyKeyRef.current}</Button>
        )}
      </Form.Label>
      <Form.Control
        type="textarea"
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

export default React.memo(StringField)