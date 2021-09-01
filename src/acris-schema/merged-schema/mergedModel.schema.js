const mergedSchema = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"id": "http://iec.ch/TC57/Merged Model v1.3 Message Model#",
	"type": "object",
	"properties":
	{
		"Merged Model v1.3 Message Model":
		{
			"type": "object",
			"anyOf":
			[
				{ "$ref": "#/definitions/Activity" },
				{ "$ref": "#/definitions/ActivityType" },
				{ "$ref": "#/definitions/AirJetty" },
				{ "$ref": "#/definitions/AircraftMovement" },
				{ "$ref": "#/definitions/AircraftMovementCodeShare" },
				{ "$ref": "#/definitions/AircraftMovementIdentification" },
				{ "$ref": "#/definitions/AircraftMovementMeasure" },
				{ "$ref": "#/definitions/AircraftMovementRuleType" },
				{ "$ref": "#/definitions/AircraftMovementStatus" },
				{ "$ref": "#/definitions/AircraftMovementType" },
				{ "$ref": "#/definitions/AircraftTransport" },
				{ "$ref": "#/definitions/AircraftTransportCabinConfiguration" },
				{ "$ref": "#/definitions/AircraftTransportEquipment" },
				{ "$ref": "#/definitions/AircraftTransportEquipmentCategory" },
				{ "$ref": "#/definitions/AircraftTransportEquipmentType" },
				{ "$ref": "#/definitions/AircraftTransportIdentification" },
				{ "$ref": "#/definitions/AircraftTransportLoad" },
				{ "$ref": "#/definitions/AircraftTransportType" },
				{ "$ref": "#/definitions/AirlineAlliance" },
				{ "$ref": "#/definitions/AirlineParty" },
				{ "$ref": "#/definitions/AirlinePartyIdentification" },
				{ "$ref": "#/definitions/AirportFacility" },
				{ "$ref": "#/definitions/AirportFacilityIdentification" },
				{ "$ref": "#/definitions/BagItemCarried" },
				{ "$ref": "#/definitions/BagItemDeliveryCarousel" },
				{ "$ref": "#/definitions/BagType" },
				{ "$ref": "#/definitions/BillingInformation" },
				{ "$ref": "#/definitions/CargoItemCarried" },
				{ "$ref": "#/definitions/CargoType" },
				{ "$ref": "#/definitions/CheckinZoneFacility" },
				{ "$ref": "#/definitions/ConnectionAircraftMovement" },
				{ "$ref": "#/definitions/CrewPartyCarried" },
				{ "$ref": "#/definitions/CrewType" },
				{ "$ref": "#/definitions/DistributedLedgerAdministratorParty" },
				{ "$ref": "#/definitions/DistributedLedgerNetwork" },
				{ "$ref": "#/definitions/DistributedLedgerNetworkChannel" },
				{ "$ref": "#/definitions/DistributedLedgerNetworkNode" },
				{ "$ref": "#/definitions/DistributedLedgerNetworkNodeAddress" },
				{ "$ref": "#/definitions/DistributedLedgerNetworkNodeDirectory" },
				{ "$ref": "#/definitions/DistributedLedgerNetworkNodeOwnerParty" },
				{ "$ref": "#/definitions/DroneAircraftMovement" },
				{ "$ref": "#/definitions/DroneAircraftMovementIdentification" },
				{ "$ref": "#/definitions/DroneAircraftMovementRuleType" },
				{ "$ref": "#/definitions/DroneAircraftMovementStatus" },
				{ "$ref": "#/definitions/DroneAircraftMovementType" },
				{ "$ref": "#/definitions/DroneAircraftTransport" },
				{ "$ref": "#/definitions/DroneAircraftTransportIdentification" },
				{ "$ref": "#/definitions/DroneAircraftTransportType" },
				{ "$ref": "#/definitions/DroneOperatorParty" },
				{ "$ref": "#/definitions/DroneOperatorPartyIdentification" },
				{ "$ref": "#/definitions/GateFacility" },
				{ "$ref": "#/definitions/GateFacilityIdentification" },
				{ "$ref": "#/definitions/GateFacilityOperationalTimes" },
				{ "$ref": "#/definitions/GateFacilityType" },
				{ "$ref": "#/definitions/GeographicLocation" },
				{ "$ref": "#/definitions/GeopoliticalLocation" },
				{ "$ref": "#/definitions/GeopoliticalLocationCategory" },
				{ "$ref": "#/definitions/GeopoliticalLocationHierarchy" },
				{ "$ref": "#/definitions/GeopoliticalLocationType" },
				{ "$ref": "#/definitions/HandlingAgentParty" },
				{ "$ref": "#/definitions/IATAIrregularityDetails" },
				{ "$ref": "#/definitions/LinkedAircraftMovement" },
				{ "$ref": "#/definitions/LocallyDefinedTimes" },
				{ "$ref": "#/definitions/Location" },
				{ "$ref": "#/definitions/MailItemCarried" },
				{ "$ref": "#/definitions/MailType" },
				{ "$ref": "#/definitions/OperationalTimes" },
				{ "$ref": "#/definitions/PassengerBoardingStatus" },
				{ "$ref": "#/definitions/PassengerGateInstruction" },
				{ "$ref": "#/definitions/PassengerPartyCarried" },
				{ "$ref": "#/definitions/PassengerType" },
				{ "$ref": "#/definitions/PierFacility" },
				{ "$ref": "#/definitions/PortOfCall" },
				{ "$ref": "#/definitions/Route" },
				{ "$ref": "#/definitions/RouteSegment" },
				{ "$ref": "#/definitions/RunwayFacility" },
				{ "$ref": "#/definitions/ScheduledAircraftMovement" },
				{ "$ref": "#/definitions/ScheduledAircraftMovementIdentification" },
				{ "$ref": "#/definitions/ScheduledAircraftMovementStatus" },
				{ "$ref": "#/definitions/ScheduledDroneAircraftMovement" },
				{ "$ref": "#/definitions/ScheduledDroneAircraftMovementIdentification" },
				{ "$ref": "#/definitions/SpatialReferenceDefinition" },
				{ "$ref": "#/definitions/SpatialReferenceSystem" },
				{ "$ref": "#/definitions/SpatialReferenceSystemType" },
				{ "$ref": "#/definitions/SpatialStandardsAuthorityParty" },
				{ "$ref": "#/definitions/StaffReadinessStatus" },
				{ "$ref": "#/definitions/StandFacility" },
				{ "$ref": "#/definitions/TerminalFacility" },
				{ "$ref": "#/definitions/WakeTurbulenceCategory" }
			]
		}
	},
	"definitions":
	{
		"Activity" : 
		{
			"type": "object",
			"properties":
			{
				"ActivityType":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/ActivityType" }
				},
				"Description":
				{
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Value":
				{
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"ActivityType" : 
		{
			"type": "object",
			"description" : "Type of mission - Commercial, Recreational.",
			"properties":
			{
				"Description":
				{
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Value":
				{
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AirJetty" : 
		{
			"type": "object",
			"description" : "A structure used at airports that allows aircraft passengers to board and unboard a plane to the airport's gate.",
			"properties":
			{
				"AirJettyHireCode":
				{
					"description" : "Information about a Jetty's Hire Code",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AirJettyType":
				{
					"description" : "Information about the different types of Air Jetties",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GateFacility":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GateFacility" }
				}
			}
		},
		"AircraftMovement" : 
		{
			"type": "object",
			"description" : "Information about the Aircraft Movement/Flight",
			"properties":
			{
				"AircraftMovementIdentification":
				{
					"$ref" : "#/definitions/AircraftMovementIdentification",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AircraftMovementStatus":
				{
					"$ref" : "#/definitions/AircraftMovementStatus",
					"minItems" : 0,
					"maxItems" : 1
				},
				"AircraftTransport":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AircraftTransport" }
				},
				"AirlineParty":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AirlineParty" }
				},
				"AirportFacility":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AirportFacility" }
				},
				"ArrivalOrDeparture":
				{
					"description" : "Information about whether the flight is an Arrival (A) or Departure (D)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ArrivalSecurityCheck":
				{
					"description" : "Information which if set to 'True', indicates that additional security checks are required for the Arrival part of the Movement Segment.",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AutomaticProcessing":
				{
					"description" : "Information about whether the displayed information should be automatic (time based) or manual (using show to public value)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"BaggageReclaim":
				{
					"description" : "Information about the Baggage Reclaim location to be displayed",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"BillingInformation":
				{
					"$ref" : "#/definitions/BillingInformation",
					"minItems" : 0,
					"maxItems" : 1
				},
				"CarrierCode":
				{
					"description" : "IATA code of the airline carrier for the flight",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CheckinZone":
				{
					"description" : "Information about the displayed checkin zone. it may be different from the root checkin zone",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Comments":
				{
					"description" : "Comments that may be displayed along side other information (e.g. next update time, delayed)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Connections":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/ConnectionAircraftMovement" }
				},
				"DeicingMode":
				{
					"description" : "The location type at which de-icing will occur. It must be one of two values. STAND, where the deicing will be performed on-stand or PAD where the deicing will be performed at a remote pad (e.g. JEDI or VADER)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DeicingPadLocation":
				{
					"description" : "The pad at which deicing will/has occurred. This should only be populated when DeicingMode is PAD.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DeicingRigEquipment":
				{
					"description" : "The identifier of the Rig equipment. This could be the asset number of the de-icing equipment where the equipment is owned by Airport (from its Asset Ledger). Where Airport does not own the equipment, this field should be omitted.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DeicingStandLocation":
				{
					"description" : "The Stand at which deicing will/has occurred. This should only be populated when DeicingMode is STAND.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DepartureSecurityCheck":
				{
					"description" : "Information which if set to 'True', indicates that additional security checks are required for the Departure part of the Aircraft Movement.",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Free text information about the Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Display":
				{
					"description" : "Information that indicates whether the aircraft movement information should be shown to the public",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DisplayFromTime":
				{
					"description" : "Information that indicates after what time the aircraft movement is shown to the public",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DisplayUntilTime":
				{
					"description" : "Information that indicates after what time the aircraft movement is no longer shown to the public",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DivertAirport":
				{
					"description" : "Information about the Diversion Airport Facility",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DivertAirportFacilityCode":
				{
					"description" : "Information about the code of the Airport Facility to which an Aircraft Transport has been diverted",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DivertIndicator":
				{
					"description" : "Information about the indicator for a diversion",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DivertReason":
				{
					"description" : "Information on the reason for the diversion",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DivertReasonCode":
				{
					"description" : "Information that describes the code for the divert reason",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedDateTime":
				{
					"description" : "The Estimated Operating DateTime to be displayed",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"FlightClassification":
				{
					"description" : "IATA Service Type Classification",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"FlightNumber":
				{
					"description" : "Information about the displayed aircraft movement. It includes operator code, formatted flight number and optional suffix",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"FlightOriginOrDestination":
				{
					"description" : "The origin/destination for the aircraft movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"FromStand":
				{
					"description" : "Origin Stand for a Ground Movement i.e. where the Aircraft Transport was moving from.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Gate":
				{
					"description" : "Information about the gate that is displayed.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GateFacility":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GateFacility" }
				},
				"HandlingAgentParty":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/HandlingAgentParty" }
				},
				"IATA Irregularities Delays":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/IATAIrregularityDetails" }
				},
				"InboundOrigin":
				{
					"description" : "The IATA code for the originating airport facility for the movement (flight).\nAlso referred to as Aerodrome of Departure. [FIXM]",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"LinkedAircraftMovement":
				{
					"$ref" : "#/definitions/LinkedAircraftMovement",
					"minItems" : 0,
					"maxItems" : 1
				},
				"OperatedDateTime":
				{
					"description" : "The Actual Operating DateTime to be displayed",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"OperationalTimes":
				{
					"$ref" : "#/definitions/OperationalTimes",
					"minItems" : 0,
					"maxItems" : 1
				},
				"OutboundDestination":
				{
					"description" : "The IATA code for the destination airport facility for the movement (flight).\nAlso referred to as Aerodrome of Destination [FIXM]",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Priority":
				{
					"description" : "Information on the Flight Service Priority on allocated Slot",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"PriorityDisplay":
				{
					"description" : "Information that indicates when the aircraft movement is promoted on the display device",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RepeatNumber":
				{
					"description" : "information about the repeat or departure attempt number for an Aircraft Movement.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Route":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/Route" }
				},
				"ScheduledDateTime":
				{
					"description" : "Information about the scheduled time of Arrival or Departure Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SpecialNeedsIndicator":
				{
					"description" : "Information that indicates that the Flight Service requires special handling including wheelchairs. This is a repeating group of up to 3 codes (to allow multiple codes to be provided)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TechnicalStop":
				{
					"description" : "Information on whether an Aircraft Movement Stop is a Technical (transit) Stop. If true, this is a Technical Stop. If false, it is not a Technical Stop.",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Terminal":
				{
					"description" : "Information about the terminal related to the aircraft movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftMovementCodeShare" : 
		{
			"type": "object",
			"description" : "Information about the Code Shares for the flight",
			"properties":
			{
				"Number":
				{
					"description" : "Information about the displayed aircraft movement code share.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ShowToPublic":
				{
					"description" : "Flag to indicate whether the code share information is to be provided to the public",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftMovementIdentification" : 
		{
			"type": "object",
			"description" : "Information about the identifiers used for the flight",
			"properties":
			{
				"AirTrafficControlCallsign":
				{
					"description" : "Information on Aircraft Callsign as used in flight plans and all Air Traffic Control interfaces. It is a combination of ATC_Flight_Number and ATC_Operator",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CodeShareIdentifier":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AircraftMovementCodeShare" }
				},
				"DisplayedIdentifier":
				{
					"description" : "Information about the publicly displayed Aircraft Movement identifier",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"IATAFlightNumber":
				{
					"description" : "Information about the IATA number for the Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"IATAOperatorIdentifier":
				{
					"description" : "Information about the IATA code assigned to an Operator of an Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ICAOIdentifier":
				{
					"description" : "The ICAO identification for an Aircraft Movement. A single alphanumeric string giving an ICAO compliant representation of the main movement identifier. This will include a 3 character ICAO carrier code, flight number stripped of leading zeroes where necessary and an optional suffix character.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ICAONumber":
				{
					"description" : "Information about the ICAO number for the Aircraft Movement.",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Number":
				{
					"description" : "Information about the number assigned to an Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ScheduledDateTime":
				{
					"description" : "Information about the scheduled time of Arrival or Departure Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Suffix":
				{
					"description" : "Information about the optional characters appended to some flight numbers. Some suffices may have specific meanings e.g. C=charter flight, P=positioning flight, T=training flight, Y=Delayed from yesterday. However, these meanings are not standard across all companies and systems so the IATA Service Type element should be used in preference",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SystemIdentifier":
				{
					"description" : "Information about a unique identifier assigned by the Airport Party's Operational Database System (AODB). It is also the numeric identifier assigned to every Aircraft Ground Movement by the AODB which provides a single unique key to identify a particular Ground Movement record.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TurnRoundIdentifier":
				{
					"description" : "Information that identifies a turnaround Aircraft Movement.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftMovementMeasure" : 
		{
			"type": "object",
			"description" : "Information that enable a Party to track the performance of the Aircraft Movement.",
			"properties":
			{
				"Code":
				{
					"description" : "Code to identify the Aircraft Movement Measure",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Description of the Aircraft Movement Measure",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier for the Aircraft Movement Measure",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Name":
				{
					"description" : "Name assigned to the Aircraft Movement Measure",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Realised as":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/OperationalTimes" }
				},
				"Title":
				{
					"description" : "Title assigned to the Aircraft Movement Measure",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Value":
				{
					"description" : "Value assigned to the Aircraft Movement Measure",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftMovementRuleType" : 
		{
			"type": "object",
			"description" : "The type of flight rule that a pilot intends to fly. ICAO Doc 4444.\nI if it is intended that the entire flight will be operated under the IFR\nV if it is intended that the entire flight will be operated under the VFR\nY if the flight initially will be operated under the IFR, followed by one or more subsequent changes of flight rules\nZ if the flight initially will be operated under the VFR, followed by one or more subsequent changes of flight rules",
			"properties":
			{
				"Code":
				{
					"description" : "Code assigned to the Aircraft Movement Rule Type (I, V, Y, Z)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Description of the Aircraft Movement Rule Type",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftMovementStatus" : 
		{
			"type": "object",
			"description" : "Information about the status of an Aircraft Movement/Flight",
			"properties":
			{
				"Cancelled":
				{
					"description" : "Information indicating whether an Aircraft Movement is cancelled",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Cleared":
				{
					"description" : "Information that indicates that the Aircraft is operationally complete and ready for departure",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Code":
				{
					"description" : "Code indicating the status of the flight",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DeicingStatus":
				{
					"description" : "Information that indicates if this Flight service has requested a de-icing service.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Deleted":
				{
					"description" : "Flag that indicates that the flight has been deleted",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"OperationalStatus":
				{
					"description" : "Information that informs the Airline and Airport operational staff concerning the status of an Aircraft Movement Segment.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"PublicStatus":
				{
					"description" : "Information about the Aircraft Movement Segment Status list that can be displayed to the public.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Regulated":
				{
					"description" : "Flag that indicates that the flight is regulated",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftMovementType" : 
		{
			"type": "object",
			"description" : "The type of flight when so required by the appropriate ATS authority. ICAO Doc 4444.\nS if scheduled air service\nN if non-scheduled air transport operation\nG if general aviation\nM if military\nX if other than any of the defined categories above.",
			"properties":
			{
				"Code":
				{
					"description" : "Code assigned to the Aircraft Movement Type (S, N, G, M, X)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Description of the Aircraft Movement Type",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftTransport" : 
		{
			"type": "object",
			"description" : "Information about the Aircraft (Aircraft Transport) used in the Aircraft Movement/Flight",
			"properties":
			{
				"Aircraft Transport Cabin":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AircraftTransportCabinConfiguration" }
				},
				"AircraftDescription":
				{
					"description" : "Aircraft Description",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AircraftTransportEquipment":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AircraftTransportEquipment" }
				},
				"AircraftTransportIdentification":
				{
					"$ref" : "#/definitions/AircraftTransportIdentification",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AircraftTransportType":
				{
					"$ref" : "#/definitions/AircraftTransportType",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EarliestDeliveryDateTime":
				{
					"description" : "Information about the earliest delivery date and time associated with a ground transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"FutureMaximumTakeOffWeight":
				{
					"description" : "Future max takeoff weight",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GuidanceRequired":
				{
					"description" : "Information on whether some guidance is required for the Aircraft Transport",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"LatestDeliveryDateTime":
				{
					"description" : "Information about the latest delivery date and time associated with a ground transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Mode":
				{
					"description" : "Information about the mode of transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"NoiseCertificationIndicator":
				{
					"description" : "Noise certification indicator",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"StandChangeIndicator":
				{
					"description" : "Information or indicator that Aircraft has changed stands",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"VehicleRequired":
				{
					"description" : "Information on whether a Coach Vehicle is required for the Aircraft Transport",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftTransportCabinConfiguration" : 
		{
			"type": "object",
			"description" : "Information about a specific cabin within the Aircraft",
			"properties":
			{
				"Cabin":
				{
					"description" : "Information about the Aircraft Cabin.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CabinClassType":
				{
					"description" : "A business defined code assigned to the category of Cabin",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CabinType":
				{
					"description" : "Information about the Aircraft cabin category. Supported by a PADIS enumeration list (PADIS 9873).",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Compartment":
				{
					"description" : "Information about the compartment on an Aircraft",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SeatCapacity":
				{
					"description" : "Information about the seating capacity in each cabin. Use a repeating group with cabin type",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SeatCount":
				{
					"description" : "Information about the number of seats on the Aircraft.",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Status":
				{
					"description" : "Information about the status of seats which includes 'New', 'Update' and 'Delete'",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftTransportEquipment" : 
		{
			"type": "object",
			"description" : "Information about equipment on board an aircraft.",
			"properties":
			{
				"AircraftTransportEquipmentCategory":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AircraftTransportEquipmentCategory" }
				},
				"AircraftTransportEquipmentType":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AircraftTransportEquipmentType" }
				},
				"Description":
				{
					"description" : "Description of the Aircraft Transport Equipment",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier of the Aircraft Transport Equipment",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Mode":
				{
					"description" : "Mode of the Aircraft Transport Equipment",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftTransportEquipmentCategory" : 
		{
			"type": "object",
			"description" : "Category of equipment on board an aircraft. Values can include Primary and Secondary Surveillance Radar, etc.",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the Aircraft Transport Equipment Category",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier of the Aircraft Transport Equipment Category",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftTransportEquipmentType" : 
		{
			"type": "object",
			"description" : "Type of equipment on board an aircraft. Values can include Communications, Navigation, Datalink, Surveillance, Survival.",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the Aircraft Transport Equipment Type",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier of the Aircraft Transport Equipment Type",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftTransportIdentification" : 
		{
			"type": "object",
			"description" : "Information about the identifiers used to identify the Aircraft Transport",
			"properties":
			{
				"AircraftAddress":
				{
					"description" : "A unique combination of twenty-four bits available for assignment to an aircraft for the purpose of air-ground communications, navigation and surveillance. [ICAO Doc 4444]",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AircraftBodyType":
				{
					"description" : "Information about the Aircraft Transport's Body Type",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AircraftVersion":
				{
					"description" : "Information about the version of the Aircraft Transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CodeRequired":
				{
					"description" : "Information that describes the required code that identifies the Aircraft Transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"FleetNumber":
				{
					"description" : "Airline ship/fleet number as assigned by the airline",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GeneralTypeCode":
				{
					"description" : "Information about the general Aircraft Type Code",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GroupCode":
				{
					"description" : "Information on the group code for the Aircraft Transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"OtherIdentifier":
				{
					"description" : "Other non specific identifier, as may be specified in FPL Messages.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Registration":
				{
					"description" : "Information about the registration of the Aircraft Transport.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AircraftTransportLoad" : 
		{
			"type": "object",
			"description" : "Information about the load carried by the Aircraft Transport on departure from the Host Airport",
			"properties":
			{
				"BagItemCarried":
				{
					"$ref" : "#/definitions/BagItemCarried",
					"minItems" : 0,
					"maxItems" : 1
				},
				"BallastWeight":
				{
					"description" : "Total weight of ballast on aircraft",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CargoItemCarried":
				{
					"$ref" : "#/definitions/CargoItemCarried",
					"minItems" : 0,
					"maxItems" : 1
				},
				"CrewPartyCarried":
				{
					"$ref" : "#/definitions/CrewPartyCarried",
					"minItems" : 0,
					"maxItems" : 1
				},
				"DeadLoad":
				{
					"description" : "Dead load - total weight on aircraft",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"MailItemCarried":
				{
					"$ref" : "#/definitions/MailItemCarried",
					"minItems" : 0,
					"maxItems" : 1
				},
				"PassengerPartyCarried":
				{
					"$ref" : "#/definitions/PassengerPartyCarried",
					"minItems" : 0,
					"maxItems" : 1
				}
			}
		},
		"AircraftTransportType" : 
		{
			"type": "object",
			"description" : "Type of aircraft transport",
			"properties":
			{
				"IATASubtypeCode":
				{
					"description" : "Information about the IATA subtype classification for the IATA Aircraft Subtype. Use SSIM Appendix A.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"IATATypeCode":
				{
					"description" : "Transportation type using IATA format. e.g. 743 for a Boeing 747-300. Use SSIM Appendix A.",
					"type" : "string",
					"minItems" : 0,
					"maxItems" : 1
				},
				"ICAOTypeCode":
				{
					"description" : "Transportation type using ICAO format. e.g. B743 for a Boeing 747-300.",
					"type" : "string",
					"minItems" : 0,
					"maxItems" : 1
				},
				"WakeTurbulenceCategory":
				{
					"$ref" : "#/definitions/WakeTurbulenceCategory",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AirlineAlliance" : 
		{
			"type": "object",
			"description" : "Information relating to the implicit and explicit agreements that describes the terms and conditions relating to a mutual understanding between parties or between parties and society that may be supported by a contract which is enforceable in law.",
			"properties":
			{
				"Description":
				{
					"description" : "Airline alliance description",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Airline alliance code or name. Provides information about a Business alliance to which an airline is a member of. Examples include Sky Team, Star or One World.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AirlineParty" : 
		{
			"type": "object",
			"description" : "Information about the airline operating the flight",
			"properties":
			{
				"AirlineAlliance":
				{
					"$ref" : "#/definitions/AirlineAlliance",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AirlinePartyIdentification":
				{
					"$ref" : "#/definitions/AirlinePartyIdentification",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Remark":
				{
					"description" : "Information that express the Airline's view",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AirlinePartyIdentification" : 
		{
			"type": "object",
			"description" : "Information about the identifiers for the airline operating the flight",
			"properties":
			{
				"IATAIdentifier":
				{
					"description" : "Information that identifies a Party based on IATA data coding standards. This may correspond to the IATA Carrier Code",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ICAOIdentifier":
				{
					"description" : "Information that identifies a Party based on ICAO coding standards. This may correspond to the ICAO Carrier Code",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"AirportFacility" : 
		{
			"type": "object",
			"description" : "Information about the Host Airport",
			"properties":
			{
				"AirportFacilityIdentification":
				{
					"$ref" : "#/definitions/AirportFacilityIdentification",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RunwayFacility":
				{
					"$ref" : "#/definitions/RunwayFacility",
					"minItems" : 0,
					"maxItems" : 1
				},
				"StandFacility":
				{
					"$ref" : "#/definitions/StandFacility",
					"minItems" : 0,
					"maxItems" : 1
				},
				"Terminal Facility":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/TerminalFacility" }
				}
			}
		},
		"AirportFacilityIdentification" : 
		{
			"type": "object",
			"description" : "Information about the identifiers for the Host Airport",
			"properties":
			{
				"IATAIdentifier":
				{
					"description" : "The code assigned to the facility (airport facility) by IATA to the Host Airport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"BagItemCarried" : 
		{
			"type": "object",
			"description" : "Information about the bags carried on the flight",
			"properties":
			{
				"Bag Types":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/BagType" }
				},
				"BagTypeCount":
				{
					"description" : "Information about the count of bags of a particular type on the Aircraft",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"BagTypeWeight":
				{
					"description" : "Information about the weight of bags in KG of a particular type on the Aircraft",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TotalCount":
				{
					"description" : "Information about the total number of bags on board the Aircraft.",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TotalWeight":
				{
					"description" : "Information about the total weight (kilos) of bags on board the Aircraft.",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"BagItemDeliveryCarousel" : 
		{
			"type": "object",
			"description" : "Information about the Baggage reclaim facilities used by the flight",
			"properties":
			{
				"ActualFirstBagTime":
				{
					"description" : "Actual time at which the first bag is received",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualLastBagTime":
				{
					"description" : "Actual time at which the last bag is received",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"BaggageReclaimStatus":
				{
					"description" : "Information on the status of the Baggage reclaim",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CarouselNumber":
				{
					"description" : "Information about the Carousel Number from which the Bag Item will be delivered",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ConveyorNumber":
				{
					"description" : "Information about the Conveyor Number from which the Bag Item will be delivered",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"LegacyFIDSCheckinZone":
				{
					"description" : "Information about the Legacy FIDS Check-in Zone from which the Bag Item will be delivered",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SecondaryCarouselNumber":
				{
					"description" : "Information about the secondary Carousel Number from which the Bag Item will be delivered",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"BagType" : 
		{
			"type": "object",
			"description" : "Information about the different types of bags on the flight",
			"properties":
			{
				"BagCode":
				{
					"description" : "Information about the categories of bags for which the count is provided",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"BagDescription":
				{
					"description" : "Description of the categories of bags for which the count is provided",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"BillingInformation" : 
		{
			"type": "object",
			"description" : "Information about the billing of the flight by the Host Airport",
			"properties":
			{
				"AircraftFEGPEquipped":
				{
					"description" : "Flag to indicate that the aircraft is FEGP equipped",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AircraftPCAEquipped":
				{
					"description" : "Flag to indicate that the aircraft is PCA equipped",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RebatePassengerNumbers":
				{
					"description" : "Billing information about the number of passenger rebates for a flight",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RebatePassengerReasonCode":
				{
					"description" : "Code to indicate the reason for the rebate",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"CargoItemCarried" : 
		{
			"type": "object",
			"description" : "Information about the cargo carried by the flight",
			"properties":
			{
				"Cargo Types":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/CargoType" }
				},
				"CargoTypeCount":
				{
					"description" : "Information about the count of cargo items of a particular type on the Aircraft",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CargoTypeWeight":
				{
					"description" : "Information about the weight of cargo in KG of a particular type on the Aircraft",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SpecialCargo":
				{
					"description" : "Information that identify any special Cargo Item on board the Aircraft Transport. Refer to IATA PADIS Code List xxx.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TotalCount":
				{
					"description" : "Information about the total number of Cargo Items transported by the Aircraft Transport",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TotalWeight":
				{
					"description" : "Information about the total number of Cargo Items transported by the Aircraft Transport",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"CargoType" : 
		{
			"type": "object",
			"description" : "Information about the different types of cargo on the flight",
			"properties":
			{
				"CargoCode":
				{
					"description" : "Information about the categories of cargo for which the count is provided",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CargoDescription":
				{
					"description" : "Description of the categories of cargo for which the count is provided",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"CheckinZoneFacility" : 
		{
			"type": "object",
			"description" : "Information about the Check-In Zone used by the flight",
			"properties":
			{
				"CheckinEndTime":
				{
					"description" : "DateTime at which Checkin ended",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CheckinStartTime":
				{
					"description" : "DateTime at which Checkin started",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CheckinStatus":
				{
					"description" : "Checkin status description",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CheckinZoneDescription":
				{
					"description" : "Description of the checkin zone",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CheckinZoneIdentifier":
				{
					"description" : "Identifier for the checkin zone for the aircraft movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"ConnectionAircraftMovement" : 
		{
			"type": "object",
			"description" : "Information to be displayed to arriving passengers on an Aircraft Movement about connecting flights",
			"properties":
			{
				"CheckinZone":
				{
					"description" : "Information about the CheckIn zone displayed for connection aircraft movements. It may be different from the root CheckIn zone",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ConnectingFlightDestination":
				{
					"description" : "The destination for the connecting aircraft movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ConnectingFlightNumber":
				{
					"description" : "Information about the aircraft movement numbers for the connection aircraft movements.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedDateTime":
				{
					"description" : "The Estimated Operating DateTime to be displayed",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Gate":
				{
					"description" : "Information about the gate displayed for connection movements. It may be different from the root gate",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"OperatedDateTime":
				{
					"description" : "The Actual Operating DateTime to be displayed",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Order":
				{
					"description" : "Information about the counter that indicates the display order of connecting aircraft movements",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ScheduledDateTime":
				{
					"description" : "The Scheduled Operating DateTime to be displayed",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Terminal":
				{
					"description" : "Information about the Terminal of the Gate/CheckIn zone for the connecting flight",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TransferBagCount":
				{
					"description" : "Number of transferring bags for the connecting flight",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TransferPassengerCount":
				{
					"description" : "Number of transferring passengers for the connecting flight",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"CrewPartyCarried" : 
		{
			"type": "object",
			"description" : "Information on the Crew on the flight",
			"properties":
			{
				"Crew Types":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/CrewType" }
				},
				"CrewCount":
				{
					"description" : "Number of Crew Members (cockpit &amp; cabin, jump seat)",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"CrewType" : 
		{
			"type": "object",
			"description" : "Information about the different types of crew on the flight",
			"properties":
			{
				"CrewType":
				{
					"description" : "Information about the categories of crew for which the count is provided",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CrewTypeCount":
				{
					"description" : "Information about the count of crew of a particular type on the Aircraft",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DistributedLedgerAdministratorParty" : 
		{
			"type": "object",
			"description" : "Information about the Administrator of the Distributed Ledger Technology (DLT) network including the (New AFTN) directory of network node addresses.",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the Administrator of the Distributed Ledger Technology (DLT) network including the (New AFTN) directory of network node addresses.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier for the Administrator of the Distributed Ledger Technology (DLT) network including the (New AFTN) directory of network node addresses.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DistributedLedgerNetwork" : 
		{
			"type": "object",
			"description" : "Information about the Distributed Ledger Technology (DLT) network.",
			"properties":
			{
				"Description":
				{
					"description" : "Description for the Distributed Ledger Technology (DLT) network.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier for the Distributed Ledger Technology (DLT) network.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DistributedLedgerNetworkChannel" : 
		{
			"type": "object",
			"description" : "Information about the Distributed Ledger Technology (DLT) network channel.",
			"properties":
			{
				"Description":
				{
					"description" : "Description for the Distributed Ledger Technology (DLT) network channel.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DistributedLedgerNetwork":
				{
					"$ref" : "#/definitions/DistributedLedgerNetwork",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier for the Distributed Ledger Technology (DLT) network channel.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DistributedLedgerNetworkNode" : 
		{
			"type": "object",
			"description" : "Information about the Distributed Ledger Technology (DLT) network node. A Node is a network participant communicating with peers over a shared communication channel.",
			"properties":
			{
				"AccountName":
				{
					"description" : "Account Name for the Distributed Ledger Technology (DLT) network node associated with the  address.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DistributedLedgerNetworkChannel":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DistributedLedgerNetworkChannel" }
				},
				"DistributedLedgerNetworkNodeAddress":
				{
					"$ref" : "#/definitions/DistributedLedgerNetworkNodeAddress",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DistributedLedgerNetworkNodeOwnerParty":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DistributedLedgerNetworkNodeOwnerParty" }
				},
				"Identifier":
				{
					"description" : "Identifier for the Distributed Ledger Technology (DLT) network node.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DistributedLedgerNetworkNodeAddress" : 
		{
			"type": "object",
			"description" : "Information about the Distributed Ledger Technology (DLT) network node address.",
			"properties":
			{
				"Description":
				{
					"description" : "Description for the Distributed Ledger Technology (DLT) network node address.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DistributedLedgerNetworkNodeDirectory":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DistributedLedgerNetworkNodeDirectory" }
				},
				"DroneOperatorParty":
				{
					"$ref" : "#/definitions/DroneOperatorParty",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier for the Distributed Ledger Technology (DLT) network node address.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DistributedLedgerNetworkNodeDirectory" : 
		{
			"type": "object",
			"description" : "Information about the Distributed Ledger Technology (DLT) network node (New AFTN) directory.",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the Distributed Ledger Technology (DLT) network node (New AFTN) directory.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DistributedLedgerAdministratorParty":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DistributedLedgerAdministratorParty" }
				},
				"Identifier":
				{
					"description" : "Identifier for the Distributed Ledger Technology (DLT) network node (New AFTN) directory.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DistributedLedgerNetworkNodeOwnerParty" : 
		{
			"type": "object",
			"description" : "Information about the owner of the network node.",
			"properties":
			{
				"Description":
				{
					"description" : "Description for the owner of the network node.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier for the owner of the network node.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Name":
				{
					"description" : "Name of the owner of the network node.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DroneAircraftMovement" : 
		{
			"type": "object",
			"description" : "Information about the Drone Aircraft Movement/Flight",
			"properties":
			{
				"AircraftMovementStatus":
				{
					"description" : "Information that indicates the displayed status of the aircraft movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ArrivalOrDeparture":
				{
					"description" : "Information about whether the flight is an Arrival (A) or Departure (D)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Comments":
				{
					"description" : "Comments that may be displayed along side other information (e.g. next update time, delayed)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Free text information about the Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DroneAircraftMovementIdentification":
				{
					"$ref" : "#/definitions/DroneAircraftMovementIdentification",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DroneAircraftMovementStatus":
				{
					"$ref" : "#/definitions/DroneAircraftMovementStatus",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DroneOperatorParty":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DroneOperatorParty" }
				},
				"FlightOriginOrDestination":
				{
					"description" : "The origin/destination for the aircraft movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Globally unique identifier for the drone aircraft movement.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"OperatedDateTime":
				{
					"description" : "The Actual Operating DateTime to be displayed",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"OperationalTimes":
				{
					"$ref" : "#/definitions/OperationalTimes",
					"minItems" : 0,
					"maxItems" : 1
				},
				"Priority":
				{
					"description" : "Information on the Flight Service Priority on allocated Slot",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Route":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/Route" }
				},
				"ScheduledDateTime":
				{
					"description" : "Information about the scheduled time of Arrival or Departure Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DroneAircraftMovementIdentification" : 
		{
			"type": "object",
			"description" : "Information about the identifiers used for the flight",
			"properties":
			{
				"Displayed Identifier":
				{
					"description" : "Information about the publicly displayed Aircraft Movement identifier",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Number":
				{
					"description" : "Information about the number assigned to an Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Scheduled DateTime":
				{
					"description" : "Information about the scheduled time of Arrival or Departure Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DroneAircraftMovementRuleType" : 
		{
			"type": "object",
			"description" : "The type of flight rule that a pilot intends to fly. ICAO Doc 4444.\nI if it is intended that the entire flight will be operated under the IFR\nV if it is intended that the entire flight will be operated under the VFR\nY if the flight initially will be operated under the IFR, followed by one or more subsequent changes of flight rules\nZ if the flight initially will be operated under the VFR, followed by one or more subsequent changes of flight rules",
			"properties":
			{
				"Code":
				{
					"description" : "Code assigned to the Aircraft Movement Rule Type (I, V, Y, Z)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Description of the Aircraft Movement Rule Type",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DroneAircraftMovementStatus" : 
		{
			"type": "object",
			"description" : "Information about the status of an Aircraft Movement/Flight",
			"properties":
			{
				"Cancelled":
				{
					"description" : "Information indicating whether an Aircraft Movement is cancelled",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Cleared":
				{
					"description" : "Information that indicates that the Aircraft is operationally complete and ready for departure",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Code":
				{
					"description" : "Code indicating the status of the flight",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Deicing Status":
				{
					"description" : "Information that indicates if this Flight service has requested a de-icing service.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Deleted":
				{
					"description" : "Flag that indicates that the flight has been deleted",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Operational Status":
				{
					"description" : "Information that informs the Airline and Airport operational staff concerning the status of an Aircraft Movement Segment.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Public Status":
				{
					"description" : "Information about the Aircraft Movement Segment Status list that can be displayed to the public.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Regulated":
				{
					"description" : "Flag that indicates that the flight is regulated",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DroneAircraftMovementType" : 
		{
			"type": "object",
			"description" : "The type of flight when so required by the appropriate ATS authority. ICAO Doc 4444.\nS if scheduled air service\nN if non-scheduled air transport operation\nG if general aviation\nM if military\nX if other than any of the defined categories above.",
			"properties":
			{
				"Code":
				{
					"description" : "Code assigned to the Aircraft Movement Type (S, N, G, M, X)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Description of the Aircraft Movement Type",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DroneAircraftTransport" : 
		{
			"type": "object",
			"description" : "Information about the Aircraft (Aircraft Transport) used in the Aircraft Movement/Flight",
			"properties":
			{
				"AircraftDescription":
				{
					"description" : "Aircraft Description",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AircraftTransportEquipment":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AircraftTransportEquipment" }
				},
				"DroneAircraftTransportIdentification":
				{
					"$ref" : "#/definitions/DroneAircraftTransportIdentification",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DroneAircraftTransportType":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DroneAircraftTransportType" }
				},
				"FutureMaximumTakeOffWeight":
				{
					"description" : "Future max takeoff weight",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GuidanceRequired":
				{
					"description" : "Information on whether some guidance is required for the Aircraft Transport",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Mode":
				{
					"description" : "Information about the mode of transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DroneAircraftTransportIdentification" : 
		{
			"type": "object",
			"description" : "Information about the identifiers used to identify the Aircraft Transport",
			"properties":
			{
				"AircraftBodyType":
				{
					"description" : "Information about the Aircraft Transport's Body Type",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AircraftVersion":
				{
					"description" : "Information about the version of the Aircraft Transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CodeRequired":
				{
					"description" : "Information that describes the required code that identifies the Aircraft Transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GeneralTypeCode":
				{
					"description" : "Information about the general Aircraft Type Code",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GroupCode":
				{
					"description" : "Information on the group code for the Aircraft Transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"OtherIdentifier":
				{
					"description" : "Other non specific identifier, as may be specified in FPL Messages.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Registration":
				{
					"description" : "Information about the registration of the Aircraft Transport.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DroneAircraftTransportType" : 
		{
			"type": "object",
			"description" : "The airframe/performance characteristics of the drone.\n\nValue, Name, Description:\nfixedWing\tFixed Wing\tA craft with a rigid wing/airfoil - it generates lift through its forward airspeed.\nrotary\tRotary\tA craft with one or more rotorblades - it generates lift through the rotation of the blades.",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the drone aircraft transport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Name":
				{
					"description" : "Name of the drone aircraft transport",
					"type" : "string",
					"minItems" : 0,
					"maxItems" : 1
				},
				"Value":
				{
					"description" : "Value of the drone aircraft transport",
					"type" : "string",
					"minItems" : 0,
					"maxItems" : 1
				}
			}
		},
		"DroneOperatorParty" : 
		{
			"type": "object",
			"description" : "Information about the operator operating the flight",
			"properties":
			{
				"DroneOperatorPartyIdentification":
				{
					"$ref" : "#/definitions/DroneOperatorPartyIdentification",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Remark":
				{
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"DroneOperatorPartyIdentification" : 
		{
			"type": "object",
			"description" : "Information about the identifiers for the party operating the flight",
			"properties":
			{
				"Description":
				{
					"description" : "Information that describes a drone operator party.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Information that identifies a drone operator party.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"GateFacility" : 
		{
			"type": "object",
			"description" : "Information about the gates used by the flight",
			"properties":
			{
				"AirJetty":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AirJetty" }
				},
				"AircraftMovement":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AircraftMovement" }
				},
				"GateFacilityIdentification":
				{
					"$ref" : "#/definitions/GateFacilityIdentification",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GateFacilityOperationalTimes":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GateFacilityOperationalTimes" }
				},
				"GateFacilityType":
				{
					"$ref" : "#/definitions/GateFacilityType",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GeneralRemarks":
				{
					"description" : "Information about general remarks",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"PassengerBoardingStatus":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/PassengerBoardingStatus" }
				},
				"PassengerGateInstruction":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/PassengerGateInstruction" }
				},
				"PierFacility":
				{
					"$ref" : "#/definitions/PierFacility",
					"minItems" : 1,
					"maxItems" : 1
				},
				"PreviousGate":
				{
					"description" : "Previous Gate number after a late change has been made.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RemoteOperationGate":
				{
					"description" : "Information about the additional location used to transfer passengers to or from remote parking positions",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SecondaryGateNumber":
				{
					"description" : "Secondary Gate Number",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"StaffReadinessStatus":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/StaffReadinessStatus" }
				}
			}
		},
		"GateFacilityIdentification" : 
		{
			"type": "object",
			"description" : "Information about the identifiers for the Gate Facility",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the gate facility",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Gate Number",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"GateFacilityOperationalTimes" : 
		{
			"type": "object",
			"description" : "Information about the operational times for the Gate Facility",
			"properties":
			{
				"ActualGateCloseTime":
				{
					"description" : "Actual time at which the gate closed",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualGateOpenTime":
				{
					"description" : "Actual time at which the gate opened",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GateFacility":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GateFacility" }
				},
				"GatingDueDateTime":
				{
					"description" : "Information about the gating due date and time",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"PlannedGateOpenTime":
				{
					"description" : "Expected time at which the gate will open",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"GateFacilityType" : 
		{
			"type": "object",
			"description" : "Information about the gates types used by the flight",
			"properties":
			{
				"Code":
				{
					"description" : "Information on the type of gate",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Information on the type of gate (e.g. Coached)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"GeographicLocation" : 
		{
			"type": "object",
			"description" : "Information about the geospatial coordinate location.",
			"properties":
			{
				"Code":
				{
					"description" : "Code for the geospatial coordinate location.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Location":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/Location" }
				},
				"Name":
				{
					"description" : "Name of the geospatial coordinate location.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"GeopoliticalLocation" : 
		{
			"type": "object",
			"description" : "Information about the geopolitical named location reference system used in the specification of a Location.",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the geopolitical named location reference system used in the specification of a Location.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GeopoliticalLocationType":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GeopoliticalLocationType" }
				},
				"Name":
				{
					"description" : "Name of the geopolitical named location reference system used in the specification of a Location.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"GeopoliticalLocationCategory" : 
		{
			"type": "object",
			"properties":
			{
				"Child Named Location":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GeopoliticalLocation" }
				},
				"Description":
				{
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GeopoliticalLocationHierarchy":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GeopoliticalLocationHierarchy" }
				},
				"Name":
				{
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Parent Named Location":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GeopoliticalLocation" }
				}
			}
		},
		"GeopoliticalLocationHierarchy" : 
		{
			"type": "object",
			"properties":
			{
				"Description":
				{
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Name":
				{
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SpatialStandardsAuthorityParty":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/SpatialStandardsAuthorityParty" }
				}
			}
		},
		"GeopoliticalLocationType" : 
		{
			"type": "object",
			"description" : "Information about the types of geopolitical named location reference system used in the specification of a Location.",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the type of geopolitical named location reference system used in the specification of a Location.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Name":
				{
					"description" : "Name of the name of the geopolitical named location reference system used in the specification of a Location.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"HandlingAgentParty" : 
		{
			"type": "object",
			"description" : "Information about a handling agent",
			"properties":
			{
				"CateringLoaderNumber":
				{
					"description" : "Catering Loader number",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Code":
				{
					"description" : "Information about the Handling Agent Code",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"HandlingCrewNumber":
				{
					"description" : "Information on the Handling Crew's number",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Name":
				{
					"description" : "Name of the Handling Agent",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"PassengerHandlingTeamIdentifier":
				{
					"description" : "Information on the Passenger Handling Team Identifier",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Type":
				{
					"description" : "Role Type of the Handling Agent (e.g. Baggage Handler)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"IATAIrregularityDetails" : 
		{
			"type": "object",
			"description" : "Details about a specific IATA Irregularity Event (e.g. a delay event)",
			"properties":
			{
				"Duration":
				{
					"description" : "Information about the duration of an irregularity, which will typically be a value expressed in hours and minutes e.g. PT1H20M is 1 hour 20 minutes, or minutes only as appropriate. There are occasions where an irregularity code is reported without any associated duration e.g. it is still being calculated but the underlying cause is known. When this occurs, the reason code will be reported with a nil duration to distinguish it from any an irregularity that has been explicitly reported wtih a duration of zero (which can happen)",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"NumericCode":
				{
					"description" : "Information about IATA assigned two digit numeric code for expressing the reason for delays, diversions and other operational irregularities. Numeric codes are considered by IATA to be primary for the reporting of irregularity information.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"LinkedAircraftMovement" : 
		{
			"type": "object",
			"description" : "Information about the linked flight (i.e. inbound or outbound flight using the same Aircraft Transport)",
			"properties":
			{
				"AircraftOnGround":
				{
					"description" : "Information that indicates whether the linked Aircraft Movement has operated. Thus, in the case of arrival aircraft movements, it indicates whether the linked departure aircraft movement has gone airborne, and in the case of a departure aircraft movement it indicates whether the linked arrival aircraft movement has landed.",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ArrivalOrDeparture":
				{
					"description" : "Information about whether the linked flight is an Arrival (A) or Departure (D)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"IATAFlightNumber":
				{
					"description" : "Information about the IATA number for the Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"IATAOperatorIdentifier":
				{
					"description" : "Information about the IATA code assigned to the operator of an Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ICAOIdentifier":
				{
					"description" : "The ICAO identification for an Aircraft Movement. A single alphanumeric string giving an ICAO compliant representation of the main movement identifier. This will include a 3 character ICAO carrier code, flight number stripped of leading zeroes where necessary and an optional suffix character.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ICAONumber":
				{
					"description" : "Information about the ICAO number for the Aircraft Movement.",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ScheduledDateTime":
				{
					"description" : "Information about the scheduled time of Arrival or Departure for the linked Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Suffix":
				{
					"description" : "Information about the optional characters appended to some flight numbers. Some suffices may have specific meanings e.g. C=charter flight, P=positioning flight, T=training flight, Y=Delayed from yesterday. However, these meanings are not standard across all companies and systems so the IATA Service Type element should be used in preference",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SystemIdentifier":
				{
					"description" : "Information about a unique identifier assigned by the Airport Party's Operational Database System (AODB).",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"LocallyDefinedTimes" : 
		{
			"type": "object",
			"description" : "Used to communicate locally meaningful times in addition to the extended CDM set",
			"properties":
			{
				"Name":
				{
					"description" : "Name/Description for the locally defined time",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Type":
				{
					"description" : "Local Type code for the locally defined time",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Value":
				{
					"description" : "Value of the locally defined time",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"Location" : 
		{
			"type": "object",
			"properties":
			{
				"Destination Location":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DroneAircraftMovement" }
				},
				"Origin Location":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DroneAircraftMovement" }
				},
				"Value":
				{
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"MailItemCarried" : 
		{
			"type": "object",
			"description" : "Information about the mail carried by the flight",
			"properties":
			{
				"Mail Types":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/MailType" }
				},
				"TotalWeight":
				{
					"description" : "Information on the total weight of mail on board the Aircraft.",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"MailType" : 
		{
			"type": "object",
			"description" : "Information about the different types of cargo on the flight",
			"properties":
			{
				"MailCode":
				{
					"description" : "Information about the categories of cargo for which the count is provided",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"MailDescription":
				{
					"description" : "Description of the categories of mail for which the count is provided",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"OperationalTimes" : 
		{
			"type": "object",
			"description" : "Information about the operational times for the aircraft movement/flight",
			"properties":
			{
				"ActualCommencementofDeicingTimeACZT":
				{
					"description" : "The time when de-icing operations on an aircraft starts. Source: CDM implementation manual.This data element is also known in the aviation industry by the acronym ACZT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualCommenceofGroundHandlingTimeACGT":
				{
					"description" : "The time when ground handling on an aircraft starts, can be equal to Actual In-Block Time (to be determined locally). This data element is also known in the aviation industry by the acronym ACGT.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualDeIcingDurationADIT":
				{
					"description" : "The actual time taken to de-ice the aircraft (AEZT-ACZT)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualEndBoardingTimeAEBT":
				{
					"description" : "Actual End of Boarding Time. This data element is also known in the aviation industry by the acronym AEBT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualEndofDeicingTimeAEZT":
				{
					"description" : "The time when de-icing operations on an aircraft end. Source: CDM implementation manual. This data element is also known in the aviation industry by the acronym AEZT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualEndofGroundHandlingTimeAEGT":
				{
					"description" : "The time when ground handling on an aircraft ends, can be equal to Actual Ready for Departure Time (to be determined locally). This data element is also known in the aviation industry by the acronym AEGT.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualFinalApproachTimeAFAT":
				{
					"description" : "Actual Final Approach Time. This data element is also known in the aviation industry by the acronym AFAT.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualGroundHandlingDurationAGHT":
				{
					"description" : "The total duration of the ground handling of the aircraft (AEGT-ACGT)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualInBlockTimeAIBT":
				{
					"description" : "The time that an aircraft arrives in blocks (equivalent to airline/handler ATA - Actual Time of Arrival, ACARS = IN). Source: CDM implementation manual. This data element is also known in the aviation industry by the acronym AIBT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualLandingTimeALDT":
				{
					"description" : "The time that an aircraft lands on a runway (equivalent to ATC ATA - Actual Time of Arrival = landing, ACARS=ON). Source: CDM implementation manual. This data element is also known in the aviation industry by the acronym ALDT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualLastCallTime":
				{
					"description" : "Actual Last Call Time.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualOffBlockTimeAOBT":
				{
					"description" : "Time the aircraft pushes back/vacates the parking position (equivalent to airline/handlers ATD - Actual Time of Departure &amp; ACARS = OUT). Source: CDM implementation manual. This data element is also known in the aviation industry by the acronym AOBT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualReadyforDeicingTimeARZT":
				{
					"description" : "De-Icing Ready Time. The time when the aircraft is ready to be deiced. Source: CDM implementation manual.This data element is also known in the aviation industry by the acronym ARZT.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualReadyforDepartureTimeARDT":
				{
					"description" : "When the aircraft is ready for pushback immediately after clearance delivery (all doors are closed and the pushback tractor - ordered by handling agent - is in position. Source: CDM implementation manual. This data element is also known in the aviation industry by the acronym ARDT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualStartBoardingTimeASBT":
				{
					"description" : "Actual Start Boarding Time. This data element is also known in the aviation industry by the acronym ASBT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualStartUpApprovalTimeASAT":
				{
					"description" : "Time that an aircraft receives its start up approval. Source: CDM implementation manual. This data element is also known in the aviation industry by the acronym ASAT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualStartUpRequestTimeASRT":
				{
					"description" : "Actual Start-up Request Time.This data element is also known in the aviation industry by the acronym ASRT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualTakeOffTimeATOT":
				{
					"description" : "The time that an aircraft takes off from the runway. (equivalent to ATC ATD - Actual Time of Departure, ACARS = OFF). Source: CDM implementation manual. This data element is also known in the aviation industry by the acronym ATOT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualTaxiInDurationAXIT":
				{
					"description" : "Actual time taken between Actual Landing Time and Actual In Block Time. Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym AXIT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualTaxiOutDurationAXOT":
				{
					"description" : "Duration between Actual off block time and Actual take-off time. Source: CDM Implementation Manual.This data element is also known in the aviation industry by the acronym AXOT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualTimeOfOperationLastPortOfCallLPocATO":
				{
					"description" : "Information about the actual time of operation from the last port of call.  For arrivals this is the actual time of departure from the previous port. For departures this is the  actual time of departure.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ActualTurnaroundTimeATTT":
				{
					"description" : "The time taken between Actual In-Block Time and Actual Off-Block Time.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CalculatedTakeOffTimeCTOT":
				{
					"description" : "A time calculated and issued by the appropriate central management unit, as a result of tactical slot allocation, at which a flight is expected to become airborne. Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym CTOT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EntryintoApproachZoneTime":
				{
					"description" : "Date and time of entry into approach zone for an inbound aircraft (always UTC).",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedCommencementofDeIcingTimeECZT":
				{
					"description" : "The time when de-icing operations on an aircraft is expected to start. Source: CDM implementation manual.This data element is also known in the aviation industry by the acronym ECZT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedDeIcingDurationEDIT":
				{
					"description" : "The time between the estimated start of de-icing and the estimated end of de-icing",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedEndBoardingTimeEEBT":
				{
					"description" : "Estimated End Boarding Time. This data element is also known in the aviation industry by the acronym EEBT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedEndofDeicingTimeEEZT":
				{
					"description" : "The estimated time when de-icing operations on an aircraft end. Source: CDM implementation manual.This data element is also known in the aviation industry by the acronym EEZT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedInBlockTimeEIBT":
				{
					"description" : "The estimated time that an aircraft will arrive in blocks (equivalent to Airline/Handler ETA - Estimated Time of Arrival). Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym EIBT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedLandingTimeELDT":
				{
					"description" : "The estimated time that an aircraft will touchdown on the runway (equivalent to ATC ETA - estimated time of arrival). Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym ELDT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedLastCallTime":
				{
					"description" : "Estimated Last Call Time.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedOffBlockDateEOBD":
				{
					"description" : "Date of Flight (this field can optionally be used in messages from AOs to the NM when an ambiguity may exist with the date). The format is and will remain YYMMDD (i.e. no century). (ATFCM Users Manual)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedOffBlockTimeEOBT":
				{
					"description" : "The estimated time that an aircraft will leave from blocks (equivalent to Airline/Handler ETA - Estimated Time of Departure). Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym EOBT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedReadyforDeicingTimeERZT":
				{
					"description" : "The estimated time when the aircraft is expected to be ready for de-icing operations. Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym ERZT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedStartBoardingTime":
				{
					"description" : "Estimated Start Boarding Time.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedTakeOffDateETOD":
				{
					"description" : "Estimated take off date.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedTakeOffTimeETOT":
				{
					"description" : "The estimated take off time taking into account the Estimated Off Block Time plus Estimated Taxi-Out Time. Source: CDM Implementation Manual.This data element is also known in the aviation industry by the acronym ETOT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedTaxiInDurationEXIT":
				{
					"description" : "The estimated time between landing and in-block. Source: CDM Implementation Manual.This data element is also known in the aviation industry by the acronym EXIT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedTaxiOutDurationEXOT":
				{
					"description" : "The estimated time between off-block and take off. Source: CDM Implementation Manual.This data element is also known in the aviation industry by the acronym EXOT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedTurnAroundDurationETTT":
				{
					"description" : "The time estimated by the Aircraft Operator/Ground Handling on the day of operation to turn-round a flight taking into account the operational constraints. Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym ETTT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Locally Defined Times":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/LocallyDefinedTimes" }
				},
				"MinimumTurnAroundTimeMTTT":
				{
					"description" : "The minimum turn-round time agreed with an Aircraft Operator or Ground Handler for a specified flight or aircraft type",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"PlannedLastCallTime":
				{
					"description" : "Planned Last Call Time.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"PlannedStartBoardingTime":
				{
					"description" : "Planned Start Boarding Time.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ScheduledInBlockTimeSIBT":
				{
					"description" : "The time that an aircraft is scheduled to arrive at its parking position. Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym SIBT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ScheduledOffBlockTimeSOBT":
				{
					"description" : "The time that an aircraft is scheduled to depart from its parking position. Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym SOBT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ScheduledTurnAroundDurationSTTT":
				{
					"description" : "The time scheduled to turn-round a flight. Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym STTT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TargetLandingTimeTLDT":
				{
					"description" : "The target landing time for an aircraft movement. Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym TLDT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TargetOffBlockTimeTOBT":
				{
					"description" : "Time, taking into account Target Start Up Time and the traffic situation, that an aircraft can expect to pushback (when start-up and pushback are issued separately). Source: CDM Implementation Manual.This data element is also known in the aviation industry by the acronym TOBT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TargetStartUpApprovalTimeTSAT":
				{
					"description" : "The time provided by Air Traffic Control taking into account target off-block time, Calculated take off time and/or the traffic situation that an aircraft can expect to receive start-up/pushback approval (when start-up and pushback are issued together). Source: CDM Implementation Manual.This data element is also known in the aviation industry by the acronym TSAT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TargetTakeOffTimeTTOT":
				{
					"description" : "The target take off time taking into account the target start-up approval time/ target off-block approval time plus estimated taxi-out time. Source: CDM Implementation Manual. This data element is also known in the aviation industry by the acronym TTOT",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"PassengerBoardingStatus" : 
		{
			"type": "object",
			"description" : "Information about the status of passenger boarding",
			"properties":
			{
				"GateFacility":
				{
					"$ref" : "#/definitions/GateFacility",
					"minItems" : 1,
					"maxItems" : 1
				},
				"StatusAtGate":
				{
					"description" : "Information about local boarding status at gate",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"PassengerGateInstruction" : 
		{
			"type": "object",
			"description" : "Information about the instructions given to passengers about how to proceed at Airport gates.",
			"properties":
			{
				"GateFacility":
				{
					"$ref" : "#/definitions/GateFacility",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GoToPassportControl":
				{
					"description" : "Information to head towards passport control",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"PassengerPartyCarried" : 
		{
			"type": "object",
			"description" : "Information about the passengers on the Aircraft Transport",
			"properties":
			{
				"Passenger Types":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/PassengerType" }
				},
				"TotalPassengerCount":
				{
					"description" : "Information about the total count of passengers on the Aircraft",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"PassengerType" : 
		{
			"type": "object",
			"description" : "Information about the different types of passengers on the flight",
			"properties":
			{
				"PassengerType":
				{
					"description" : "Information about the categories of passengers for which the count is provided",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"PassengerTypeCount":
				{
					"description" : "Information about the count of passengers of a particular type on the Aircraft",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"PierFacility" : 
		{
			"type": "object",
			"description" : "A terminal pier infrastructure facility is a raised structure, including bridge and building supports and walkways, typically supported by widely spread piles or pillars.",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the pier on which the gate being used to board a flight is located",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GateFacility":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GateFacility" }
				},
				"Identifier":
				{
					"description" : "Information about pier on which the gate being used to board a flight is located",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"PortOfCall" : 
		{
			"type": "object",
			"description" : "Details about a specific port of call in an Aircraft's route",
			"properties":
			{
				"AircraftTransportLoad":
				{
					"$ref" : "#/definitions/AircraftTransportLoad",
					"minItems" : 0,
					"maxItems" : 1
				},
				"IATALocationCode":
				{
					"description" : "IATA Location Code for the Port of Call",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ICAOLocationCode":
				{
					"description" : "ICAO Location Code for the Port of Call",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Name":
				{
					"description" : "Name of the Port of Call. Mandatory if the location does not have an IATA location code",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RouteLeg":
				{
					"description" : "Sequence number for the Port of Call in the Route (starting at 1)",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"Route" : 
		{
			"type": "object",
			"description" : "Information about the Route of the Aircraft Movement",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the route of the aircraft movement.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier for the route.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RequestedFlightLevel":
				{
					"description" : "Requested flightlevel (in flightlevel number, tens of meters or hundreds of feet). For example F360.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RequestedFlightLevelPoint":
				{
					"description" : "The point at : which a change of Requested Flight Level is required.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RouteInternationalDomestic":
				{
					"description" : "Information that indicates the type of Flight service. Examples include I=international, D=domestic, C=Common Travel Area (Irish Republic and Channel)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RouteText":
				{
					"description" : "A string of route elements complying with PANS-ATM Item 15c",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"StandardInstrumentDeparture":
				{
					"description" : "Information about a Standard Instrument Departure ending at a designated point. For example E.g. KOGAL1A and KOGAL.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TrueAirspeed":
				{
					"description" : "True airspeed (in kilometers per hours or knots).",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TrueAirspeedPoint":
				{
					"description" : "The point at which a change of airspeed is requested.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"RouteSegment" : 
		{
			"type": "object",
			"description" : "Information about the Route of the Aircraft Movement",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the route of the aircraft movement.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier for the route segment.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Port Of Call":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/PortOfCall" }
				},
				"RequestedFlightLevel":
				{
					"description" : "Requested flightlevel (in flightlevel number, tens of meters or hundreds of feet). For example F360.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"RequestedFlightLevelPoint":
				{
					"description" : "The point at : which a change of Requested Flight Level is required.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Route":
				{
					"$ref" : "#/definitions/Route",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TrueAirspeed":
				{
					"description" : "True airspeed (in kilometers per hours or knots).",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TrueAirspeedPoint":
				{
					"description" : "The point at which a change of airspeed is requested.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"RunwayFacility" : 
		{
			"type": "object",
			"description" : "Information about the runway used by this flight",
			"properties":
			{
				"RunwayIdentifier":
				{
					"description" : "Runway identifier. For example, 27L, 09R, 23.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"ScheduledAircraftMovement" : 
		{
			"type": "object",
			"description" : "Information about the scheduled Aircraft Movement/Flight, often known as the Flight Plan for a specific aircraft movement.",
			"properties":
			{
				"AircraftMovementRuleType":
				{
					"$ref" : "#/definitions/AircraftMovementRuleType",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AircraftMovementType":
				{
					"$ref" : "#/definitions/AircraftMovementType",
					"minItems" : 1,
					"maxItems" : 1
				},
				"AircraftTransport":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AircraftTransport" }
				},
				"AirportFacility":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/AirportFacility" }
				},
				"AlternateAirport":
				{
					"description" : "Name and location of alternate Airport if no ICAO location exists (Also referred to as ALTNZ)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DepartureAirportICAOCode":
				{
					"description" : "ICAO identifier of the Airport of departure",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DestinationAirportICAOCode":
				{
					"description" : "ICAO identifier of the destination Airport",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedDuration":
				{
					"description" : "Total estimated elapsed time in hours and minutes. For a flight plan received from an aircraft in flight, the total estimated elapsed time is the estimated time from the first point of the route to which the flight plan applies to the termination point of the flight plan. [DOC 4444]",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedTimeofArrival":
				{
					"description" : "Estimated time of arrival. For IFR flights, the time at which it is estimated that the aircraft will arrive over that designated point, defined by reference to navigation aids, from which it is intended that an instrument approach procedure will be commenced, or, if no navigation aid is associated with the aerodrome, the time at which the aircraft will arrive over the aerodrome. For VFR flights, the time at which it is estimated that the aircraft will arrive over the aerodrome. [DOC 4444]",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"OperationalTimes":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/OperationalTimes" }
				},
				"OtherInformation":
				{
					"description" : "Other necessary information for the scheduled aircraft movement. [DOC 4444]",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Remark":
				{
					"description" : "Plain language remarks, as ICAO field 18 RMK/.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Route":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/Route" }
				},
				"ScheduledAircraftMovementIdentification":
				{
					"$ref" : "#/definitions/ScheduledAircraftMovementIdentification",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ScheduledAircraftMovementStatus":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/ScheduledAircraftMovementStatus" }
				}
			}
		},
		"ScheduledAircraftMovementIdentification" : 
		{
			"type": "object",
			"description" : "Information about the identifiers used for the flight",
			"properties":
			{
				"AirTrafficControlCallsign":
				{
					"description" : "Information on Aircraft Callsign as used in flight plans and all Air Traffic Control interfaces. It is a combination of ATC_Flight_Number and ATC_Operator",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"IATAFlightNumber":
				{
					"description" : "Information about the IATA number for the Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"IATAOperatorIdentifier":
				{
					"description" : "Information about the IATA code assigned to an Operator of an Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ICAOIdentifier":
				{
					"description" : "The ICAO identification for an Aircraft Movement. A single alphanumeric string giving an ICAO compliant representation of the main movement identifier. This will include a 3 character ICAO carrier code, flight number stripped of leading zeroes where necessary and an optional suffix character.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ICAONumber":
				{
					"description" : "Information about the ICAO number for the Aircraft Movement.",
					"type" : "integer",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Unique Flight plan identifier assigned by the Initial Flight Plan Processing System (IFPS).",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Number":
				{
					"description" : "Information about the number assigned to an Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ScheduledDateTime":
				{
					"description" : "Information about the scheduled time of Arrival or Departure Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Suffix":
				{
					"description" : "Information about the optional characters appended to some flight numbers. Some suffices may have specific meanings e.g. C=charter flight, P=positioning flight, T=training flight, Y=Delayed from yesterday. However, these meanings are not standard across all companies and systems so the IATA Service Type element should be used in preference",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SystemIdentifier":
				{
					"description" : "Information about a unique identifier assigned by the Airport Party's Operational Database System (AODB). It is also the numeric identifier assigned to every Aircraft Ground Movement by the AODB which provides a single unique key to identify a particular Ground Movement record.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"TurnRoundIdentifier":
				{
					"description" : "Information that identifies a turnaround Aircraft Movement.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"ScheduledAircraftMovementStatus" : 
		{
			"type": "object",
			"description" : "Information about the Scheduled Aircraft Movement Status. Also referred to as Flight Plan status.",
			"properties":
			{
				"Code":
				{
					"description" : "Code of the Scheduled Aircraft Movement Status. Also referred to as Flight Plan status.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Description of the Scheduled Aircraft Movement Status. Also referred to as Flight Plan status.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"ScheduledDroneAircraftMovement" : 
		{
			"type": "object",
			"description" : "Information about the scheduled Aircraft Movement/Flight, often known as the Flight Plan for a specific aircraft movement.",
			"properties":
			{
				"Activity":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/Activity" }
				},
				"ContactResolutionScope":
				{
					"description" : "The scope under which the flight plan will be tested for conflictions against (global or local).",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "SORA Specific Operational Risk Assessment",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"DroneAircraftMovementRuleType":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DroneAircraftMovementRuleType" }
				},
				"DroneAircraftMovementType":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DroneAircraftMovementType" }
				},
				"DroneAircraftTransport":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/DroneAircraftTransport" }
				},
				"EstimatedDuration":
				{
					"description" : "Total estimated elapsed time in hours and minutes. For a flight plan received from an aircraft in flight, the total estimated elapsed time is the estimated time from the first point of the route to which the flight plan applies to the termination point of the flight plan. [DOC 4444]",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"EstimatedTimeOfArrival":
				{
					"description" : "Estimated time of arrival. For IFR flights, the time at which it is estimated that the aircraft will arrive over that designated point, defined by reference to navigation aids, from which it is intended that an instrument approach procedure will be commenced, or, if no navigation aid is associated with the aerodrome, the time at which the aircraft will arrive over the aerodrome. For VFR flights, the time at which it is estimated that the aircraft will arrive over the aerodrome. [DOC 4444]",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"OperationalTimes":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/OperationalTimes" }
				},
				"OtherInformation":
				{
					"description" : "Other necessary information for the scheduled aircraft movement. [DOC 4444]",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Planned Destination Location":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/Location" }
				},
				"Planned Origin Location":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/Location" }
				},
				"Purpose":
				{
					"description" : "A public description of the purpose of the flight, e.g. Inspection.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Remark":
				{
					"description" : "Plain language remarks, as ICAO field 18 RMK/.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Route":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/Route" }
				},
				"SORAReference":
				{
					"description" : "SORA Specific Operational Risk Assessment",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ScheduledAircraftMovementStatus":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/ScheduledAircraftMovementStatus" }
				},
				"ScheduledDroneAircraftMovementIdentification":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/ScheduledDroneAircraftMovementIdentification" }
				},
				"Summary":
				{
					"description" : "Summary of the flight or operation. This may be shared with others if the scope is global.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"ScheduledDroneAircraftMovementIdentification" : 
		{
			"type": "object",
			"description" : "Information about the identifiers used for the flight",
			"properties":
			{
				"Identifier":
				{
					"description" : "Unique Flight plan identifier assigned by the Initial Flight Plan Processing System (IFPS).",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ScheduledDateTime":
				{
					"description" : "Information about the scheduled time of Arrival or Departure Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SystemIdentifier":
				{
					"description" : "Information about a unique identifier assigned by the Airport Party's Operational Database System (AODB). It is also the numeric identifier assigned to every Aircraft Ground Movement by the AODB which provides a single unique key to identify a particular Ground Movement record.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"SpatialReferenceDefinition" : 
		{
			"type": "object",
			"properties":
			{
				"CoordX":
				{
					"type" : "number",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CoordY":
				{
					"type" : "number",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CoordZ":
				{
					"type" : "number",
					"minItems" : 1,
					"maxItems" : 1
				},
				"GeographicLocation":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GeographicLocation" }
				},
				"SpatialReferenceSystem":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/SpatialReferenceSystem" }
				},
				"Value":
				{
					"description" : "Address string of the Location identified by the Named Location Reference System.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"SpatialReferenceSystem" : 
		{
			"type": "object",
			"description" : "Information about the coordinate reference system in use. It may also be known locally as the Map Grid Reference System.",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the spatial reference system used in the specification of a Location e.g. WGS84 for code 4326.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Identifier":
				{
					"description" : "Identifier for the spatial reference system used in the specification of a Location e.g. 4326 for WGS84.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"SpatialReferenceSystemType":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/SpatialReferenceSystemType" }
				},
				"SpatialStandardsAuthorityParty":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/SpatialStandardsAuthorityParty" }
				}
			}
		},
		"SpatialReferenceSystemType" : 
		{
			"type": "object",
			"description" : "Information about the type of spatial reference system used to specify Location. Values are: Local (to the organisation using it), International, Regional, Global.",
			"properties":
			{
				"Code":
				{
					"description" : "Values: Local (to the organisation using it), International, Regional, Global.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Description of the type of spatial reference system used to specify Location. Values are: Local (to the organisation using it), International, Regional, Global.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"SpatialStandardsAuthorityParty" : 
		{
			"type": "object",
			"description" : "Information about the standards authority for the geospatial reference system used in the specification of a Location.",
			"properties":
			{
				"Description":
				{
					"description" : "Description of the standards authority for the geospatial reference system used in the specification of a Location.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Name":
				{
					"description" : "Name of the standards authority for the geospatial reference system used in the specification of a Location.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"StaffReadinessStatus" : 
		{
			"type": "object",
			"description" : "Information about the status of staff readiness for operating the gate.",
			"properties":
			{
				"GateFacility":
				{
					"type" : "array",
					"items" : { "$ref":"#/definitions/GateFacility" }
				},
				"StaffReadyForGateControl":
				{
					"description" : "If set, information indicates that staff is ready for gate open event",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"StandFacility" : 
		{
			"type": "object",
			"description" : "Information about the stands used by this flight",
			"properties":
			{
				"ArrivalStand":
				{
					"description" : "Information about the stand the Aircraft used directly after landing which is not updated by ground movements. Stand/parking area at which an aircraft originally parked on arrival at the Airport and from which passengers would have disembarked.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"CoachingIsRequired":
				{
					"description" : "Information which indicates if coaching service is required or not. By default, omission of this element will imply that coaching is not required.",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"ProvisionalStandNumber":
				{
					"description" : "Stand number provisionally allocated to the Aircraft Movement",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"StandHoldConflictingStand":
				{
					"description" : "Information about stand hold conflicting stand. Stand/parking area which is causing a hold condition to exist for a particular aircraft. In the case of a standard hold, the conflicting stand will always be the same as the main allocated stand but for adjacency holds, it may not be immediately obvious which adjacent stand is causing the hold and so it is explicitly named here.",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"StandHoldRequired":
				{
					"description" : "Information on whether a stand hold is required. True=aircraft must wait for allocated stand to become vacant, False=aircraft may come on stand immediately. By default, omission of this element will imply that a hold is not required.",
					"type" : "boolean",
					"minItems" : 1,
					"maxItems" : 1
				},
				"StandLocation":
				{
					"description" : "Location of the stand",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"StandNumber":
				{
					"description" : "Stand number",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"StandType":
				{
					"description" : "Type of stand",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"TerminalFacility" : 
		{
			"type": "object",
			"description" : "Details of a specific terminal used by the flight",
			"properties":
			{
				"BagItemDeliveryCarousel":
				{
					"$ref" : "#/definitions/BagItemDeliveryCarousel",
					"minItems" : 0,
					"maxItems" : 1
				},
				"CheckinZoneFacility":
				{
					"$ref" : "#/definitions/CheckinZoneFacility",
					"minItems" : 0,
					"maxItems" : 1
				},
				"Code":
				{
					"description" : "Code for the Terminal",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Description of the Terminal",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		},
		"WakeTurbulenceCategory" : 
		{
			"type": "object",
			"description" : "Wake turbulence category\nThe message shall indicate the wake turbulence category of that aircraft type. The IFPS shall accept only the following 4 wake turbulence categories:\nL (light), M (medium), H (heavy) or J (super).\nL Shall be inserted for an aircraft with a maximum certified take off mass of 7000 kg or less.\nM Shall be inserted for an aircraft with a maximum certified take off mass of less than 136000 kg but more than 7000 kg.\nH Shall be inserted for an aircraft with a maximum certified take off mass of less than 560000kg but more than 136000 kg.\nJ Shall be inserted for an aircraft with a maximum certified take off mass of 560000kg or more.",
			"properties":
			{
				"Code":
				{
					"description" : "Code for the Aircraft Transport Type Wake Turbulence Category (L, M, H, J)",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				},
				"Description":
				{
					"description" : "Description for the Aircraft Transport Type Wake Turbulence Category",
					"type" : "string",
					"minItems" : 1,
					"maxItems" : 1
				}
			}
		}
	}
}

export default mergedSchema