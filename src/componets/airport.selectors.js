import { createSelector } from 'reselect';

export const flightsListSelector = (state) => state.flights.listFlights;

export const searchDataSelector = (state) => state.flights.reiseData;

export const departureListSelector = createSelector(
  [flightsListSelector],
  (flightsList) => flightsList.departure
);
export const arrivalListSelector = createSelector(
  [flightsListSelector],
  (flightsList) => flightsList.arrival
);

export const sortedDepartureListSelector = createSelector(
  [departureListSelector, searchDataSelector],
  (departureList, searchData) =>
    !searchData
      ? departureList
      : departureList.filter((flight) =>
          flight.codeShareData[0].codeShare.includes(searchData)
        )
);
export const sortedArrivalListSelector = createSelector(
  [arrivalListSelector, searchDataSelector],
  (arrivalList, searchData) =>
    !searchData
      ? arrivalList
      : arrivalList.filter((flight) =>
          flight.codeShareData[0].codeShare.includes(searchData)
        )
);

export const flightDateSelector = (state) => state.flights.date;
