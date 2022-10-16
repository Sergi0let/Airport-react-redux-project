import * as airportGateway from './airport.gateway.js';

export const FLIGHTS_LIST_RECIVED = 'FLIGHTS_LIST_RECIVED';
export const FLIGHT_SEARCH_RECIVED = 'FLIGHT_SEARCH_RECIVED';
export const FLIGHT_DATE_RECIVED = 'FLIGHT_DATE_RECIVED';

// const dateValue = '11-01-2022';

export const flightsListRecived = (listData) => {
  return {
    type: FLIGHTS_LIST_RECIVED,
    payload: {
      listData,
    },
  };
};
export const fetchFlightList = (dateValue) =>
  function (dispatch) {
    return airportGateway
      .getFlightData(dateValue)
      .then((listData) => dispatch(flightsListRecived(listData)));
  };

export const flightSearchRecived = (reiseData) => {
  return {
    type: FLIGHT_SEARCH_RECIVED,
    payload: {
      reiseData,
    },
  };
};
export const flightSearch = (searchData) =>
  function (dispatch) {
    return dispatch(flightSearchRecived(searchData));
  };

export const flightDataRecived = (date) => {
  return {
    type: FLIGHT_DATE_RECIVED,
    payload: {
      date,
    },
  };
};

export const getDateFlight = (date) =>
  function (dispatch) {
    return dispatch(flightDataRecived(date));
  };
