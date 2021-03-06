const flightArrivalInfo = {
	"$schema": "http://json-schema.org/draft-03/schema",
	"title": "FlightArrivalInformation",
	"type": "object",
	"description": "The arrival information for the flight.",
	"properties": {
		"scheduled": {
			"type": "string",
			"format": "date-time",
			"required": true,
			"description": "Scheduled time of arrival including time zone. Format ISO-8601 is used."
		},
		"estimated": {
			"type": "string",
			"format": "date-time",
			"description": "Estimated time of arrival including time zone. Format ISO-8601 is used. Every airport should provide the best information he has, corresponding to the FIDS."
		},
		"actual": {
			"type": "string",
			"format": "date-time",
			"description": "Actual time of arrival including time zone. Format ISO-8601 is used. Every airport should provide the best information he has, corresponding to the FIDS."
		},
		"terminal": {
			"type": "string",
			"description": "The terminal for the flight"
		},
		"gate": {
			"type": "string",
			"description": "The arrival gate for the flight. Depending on the buildings of every airport this could be an gate or area the passenger enters the terminal the first time."
		},
		"transferInformation": {
			"type": "string",
			"description": "Provide information for your passengers where the nearest transfer desks for this flight can be found."
		},
		"baggageClaim": {
			"type": "object",
			"properties": {
				"carousel": {
					"type": "string",
					"description": "The carousel for baggage claim"
				},
				"expectedTimeOnCarousel": {
					"type": "string",
					"format": "date-time",
					"description": "expected time when the baggage claim begins"
				}
			}
		}
	}
}

export default flightArrivalInfo