import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Flight from './Flight.jsx';

const Flights = ({ flightList }) => {
  const { arrivedId } = useParams();

  return (
    <tbody className="board-table__body table-body">
      {flightList.map((flight) => (
        <Flight
          key={flight.ID}
          {...flight}
          status={
            arrivedId === 'departure'
              ? flight['airportToID.city']
              : flight['airportFromID.name']
          }
          logo={flight.airline.en.logoName}
          company={flight.airline.en.icao}
          reise={flight.codeShareData[0].codeShare}
          arrivedId={arrivedId}
        />
      ))}
    </tbody>
  );
};

Flights.propTypes = {
  flightList: PropTypes.array,
};

Flights.defaultProps = {
  flightList: [],
};

export default Flights;
