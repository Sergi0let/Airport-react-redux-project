import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as airportAction from '../airport.action.js';
import { flightDateSelector } from '../airport.selectors.js';

const Calendar = ({ getDateFlight, fetchFlightList, flightDateSelector }) => {
  const [flightDate, setFlightDate] = useState(
    moment(new Date()).format('YYYY-MM-DD')
  );

  const presentDay = moment(new Date()).format('YYYY-MM-DD');
  const [, presMonth, presDate] = presentDay.split('-');
  const [, month, date] = flightDate.split('-');
  const prevDay = moment(new Date()).subtract(1, 'days').format('YYYY-MM-DD');
  const [, prevMonth, prevDate] = prevDay.split('-');
  const nextDay = moment(new Date()).add(1, 'days').format('YYYY-MM-DD');
  const [, nextMonth, nextDate] = nextDay.split('-');

  const onChange = (e) => {
    setFlightDate(e.target.value);
    fetchFlightList(flightDateSelector);
  };

  const setUserDay = (day) => {
    setFlightDate(day);
    getDateFlight(prepeareData(flightDate));
    fetchFlightList(flightDateSelector);
  };

  const prepeareData = (date) => date.split('-').reverse().join('-');

  useEffect(() => {
    getDateFlight(prepeareData(flightDate));
  });

  return (
    <div className="fly-table__calendar calendar-fly">
      <div className="calendar-fly__date">
        <div className="calendar-fly__current-date">{`${date}/${month}`}</div>
        <input
          className="calendar-fly__input-date"
          type="date"
          value={flightDate}
          onChange={onChange}
        />
      </div>
      <nav className="calendar-fly__wrapper">
        <button
          href="#"
          className="calendar-fly__toggle-date"
          onClick={() => setUserDay(prevDay)}
        >
          <div className="calendar-fly__toggle-number">{`${prevDate}/${prevMonth}`}</div>
          <h4 className="calendar-fly__toggle-name">Вчора</h4>
        </button>
        <button
          className="calendar-fly__toggle-date"
          onClick={() => setUserDay(presentDay)}
        >
          <div className="calendar-fly__toggle-number">{`${presDate}/${presMonth}`}</div>
          <h4 className="calendar-fly__toggle-name">Сьогодні</h4>
        </button>
        <button
          href="#"
          className="calendar-fly__toggle-date"
          onClick={() => setUserDay(nextDay)}
        >
          <div className="calendar-fly__toggle-number">{`${nextDate}/${nextMonth}`}</div>
          <h4 className="calendar-fly__toggle-name">Завтра</h4>
        </button>
      </nav>
    </div>
  );
};

Calendar.propTypes = {
  flightDateSelector: PropTypes.string.isRequired,
  getDateFlight: PropTypes.func.isRequired,
  fetchFlightList: PropTypes.func.isRequired,
};
const mapState = (state) => ({ flightDateSelector: flightDateSelector(state) });

const mapDispatch = {
  getDateFlight: airportAction.getDateFlight,
  fetchFlightList: airportAction.fetchFlightList,
};
export default connect(mapState, mapDispatch)(Calendar);
