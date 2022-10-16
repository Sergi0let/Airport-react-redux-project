import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

import thunk from 'redux-thunk';

import airportReducer from './componets/airport.reducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ flights: airportReducer });

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
