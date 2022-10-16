import React from 'react';

import { getTime } from '../airoprt.scripts.js';

const Flight = ({
  term,
  status,
  timeDepShedule,
  logo,
  company,
  reise,
  arrivedId,
  timeToStand,
  timeTakeofFact,
}) => {
  const styleTerm =
    term !== 'A' ? { color: '#1eb7ee', borderColor: '#1eb7ee' } : null;
  const statusFlight = arrivedId === 'departure' ? 'Вилетів о' : 'Прибув';
  return (
    <tr>
      <td>
        <div style={styleTerm} className="table-body__terminal">
          {term}
        </div>
      </td>
      <td>
        {arrivedId === 'departure'
          ? getTime(timeDepShedule)
          : getTime(timeToStand)}
      </td>
      <td>{status}</td>
      <td>{`${statusFlight} ${getTime(timeTakeofFact)}`}</td>
      <td className="table-body__img-wrapper">
        <img className="table-body__img" src={logo} alt="logo airline" />
        {company}
      </td>
      <td>{reise}</td>
      <td>
        <a href="/" className="table-body__link">
          Деталі рейсу
        </a>
      </td>
    </tr>
  );
};
export default Flight;

/*
term
reise: carrierID.IATA fltNo   (codeShareData.codeShare)
airportToID.name
aviacompany: carrierID.code  (codeShareData.icao / codeShareData.logo )
rozklad: timeLandFact
timeTakeofFact
*/
