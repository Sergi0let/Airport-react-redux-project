import moment from 'moment';
import {
  FLIGHTS_LIST_RECIVED,
  FLIGHT_SEARCH_RECIVED,
  FLIGHT_DATE_RECIVED,
} from './airport.action.js';

const initialState = {
  listFlights: [],
  reiseData: '',
  date: moment(new Date()).format('DD-MM-YYYY'),
};

const airportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIVED: {
      return {
        ...state,
        listFlights: action.payload.listData,
      };
    }
    case FLIGHT_SEARCH_RECIVED: {
      return {
        ...state,
        reiseData: action.payload.reiseData,
      };
    }
    case FLIGHT_DATE_RECIVED: {
      return {
        ...state,
        date: action.payload.date,
      };
    }
    default:
      return state;
  }
};

export default airportReducer;
// const updatedList = state.listFlights.filter((flight) =>
//   flight.codeShareData[0].codeShare.includes(action.payload.reiseNum)
// );
