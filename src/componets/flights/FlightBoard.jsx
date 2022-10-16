import React, { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Board from './Board.jsx';
import Calendar from './Calendar.jsx';
import Search from './Search.jsx';
import { flightDateSelector } from '../airport.selectors.js';

import * as airportAction from '../airport.action.js';
import Noflights from './Noflights.jsx';

const FlightBoard = ({ fetchFlightList, flightDateSelector }) => {
  useEffect(() => {
    fetchFlightList(flightDateSelector);
  }, []);

  return (
    <>
      <Search />
      <section className="fly-table">
        <nav className="fly-table__navigation">
          <NavLink
            to="/departure"
            className="fly-table__link fly-table__link_departures"
          >
            виліт
          </NavLink>
          <NavLink
            to="/arrival"
            className="fly-table__link fly-table__link_arrivals"
          >
            приліт
          </NavLink>
        </nav>
        <Calendar />
        <Switch>
          <Route exact path="/">
            <Noflights />
          </Route>
          <Route path="/:arrivedId">
            <Board />
          </Route>
        </Switch>
      </section>
    </>
  );
};

FlightBoard.propTypes = {
  flightDateSelector: PropTypes.string.isRequired,
  fetchFlightList: PropTypes.func.isRequired,
};

const mapState = (state) => ({ flightDateSelector: flightDateSelector(state) });

const mapDispatch = { fetchFlightList: airportAction.fetchFlightList };

export default connect(mapState, mapDispatch)(FlightBoard);
