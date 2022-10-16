import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Flights from './Flights.jsx';
import Noflights from './Noflights.jsx';
import {
  sortedDepartureListSelector,
  sortedArrivalListSelector,
} from '../airport.selectors.js';

function Board({ sortedDeparture, sortedArrival }) {
  const { arrivedId } = useParams();

  const flightList =
    arrivedId === 'departure' ? sortedDeparture : sortedArrival;

  const destinationFlight =
    arrivedId === 'departure' ? 'Напрямок' : 'Прилітає з';

  if (!flightList || flightList.length === 0) {
    return <Noflights />;
  }

  return (
    <table className="fly-table__board board-table">
      <thead className="board-table__header">
        <tr>
          <th>Термінал</th>
          <th>Розклад</th>
          <th>{destinationFlight}</th>
          <th>Статус</th>
          <th>Авіакомпанія</th>
          <th>Рейс</th>
        </tr>
      </thead>
      <Flights flightList={flightList} />
    </table>
  );
}
Board.propTypes = {
  sortedDepartureListSelector: PropTypes.array,
  sortedArrivalListSelector: PropTypes.array,
};

Board.defaultProps = {
  sortedDepartureListSelector: [],
  sortedArrivalListSelector: [],
};
const mapState = (state) => {
  return {
    sortedDeparture: sortedDepartureListSelector(state),
    sortedArrival: sortedArrivalListSelector(state),
  };
};

export default connect(mapState)(Board);
