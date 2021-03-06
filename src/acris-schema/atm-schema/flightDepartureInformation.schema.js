const flightDepartureInfo = {
	"$schema": "http://json-schema.org/draft-03/schema",
	"title": "FlightDepartureInformation",
	"type": "object",
	"description": "The departure information for the flight",
	"properties": {
		"scheduled": {
			"type": "string",
			"format": "date-time",
			"required": true,
			"description": "Scheduled time of departure including time zone. Format ISO-8601 is used."
		},
		"estimated": {
			"type": "string",
			"format": "date-time",
			"description": "Estimated time of departure including time zone. Format ISO-8601 is used. Every airport should provide the best information he has, corresponding to the FIDS."
		},
		"actual": {
			"type": "string",
			"format": "date-time",
			"description": "Actual time of departure including time zone. Format ISO-8601 is used. Every airport should provide the best information he has, corresponding to the FIDS."
		},
		"terminal": {
			"type": "string",
			"description": "The terminal for the flight"
		},
		"gate": {
			"type": "string",
			"description": "The gate for the flight"
		},
		"checkinInfo": {
			"type": "object",
			"description": "The check-in information for the passenger",
			"properties": {
				"checkinLocation": {
					"type": "string",
					"description": "The area of check-in facilities for the flight"
				},
				"checkInBeginTime": {
					"type": "string",
					"format": "date-time",
					"description": "The time when check-in procedure starts for the flight"
				},
				"checkInEndTime": {
					"type": "string",
					"format": "date-time",
					"description": "The time when check-in procedure ends for the flight"
				},
				"additionalInfo": {
					"type": "string",
					"description": "Additional information about the check-in process"
				}
			}
		},
		"boardingTime": {
			"type": "array",
			"description": "A list of airports and the corresponding arrival and departure information for stops during the flight. The order in the array represents the flight order.",
			"items": {
				"type": "object",
				"properties": {
					"bookingClass": {
						"type": "string",
						"description": "A name (intl) of the booking class - if there are different boarding times for different classes"
					},
					"time": {
						"type": "string",
						"format": "date-time",
						"description": "Boarding time of departure including time zone. Format ISO-8601 is used. Every airport should provide the best information he has, corresponding to the FIDS."
					}
				}
			}
		}
	}
}

export default flightDepartureInfo