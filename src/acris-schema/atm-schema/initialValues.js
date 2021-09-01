const initialValues = {
    flightData: {
      operatingAirline: {
        iataCode: null,
        icaoCode: null,
        name: null
      },
      aircraftType: {},
      flightNumber: {
        airlineCode: null,
        trackNumber: null,
        suffix: null
      },
      departureAirport: null,
      arrivalAirport: null,
      originDate: null,
      departure: {
        scheduled: null,
        estimated: null,
        actual: null,
        terminal: null,
        gate: null
      },
      arrival: {
        scheduled: null,
        estimated: null,
        actual: null,
        terminal: null,
        gate: null,
        baggageClaim: {
          carousel: null,
          expectedTimeOnCarousel: null
        }
      },
      flightStatus: null,
      extensions: {}
    },
    flightKey: null,
    updaterId: null,
    txId: null,
    timestamp: {}
  }

  export default initialValues