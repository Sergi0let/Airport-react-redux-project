import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as airportAction from '../airport.action.js';

function Search({ flightSearch }) {
  const [searchData, setSearchData] = useState('');

  const onChange = (e) => setSearchData(e.target.value);

  return (
    <section className="search-reise">
      <div className="search-reise__block">
        <h1 className="search-reise__title">ПОШУК РЕЙСУ</h1>
        <div className="search-reise__form">
          <input
            type="text"
            placeholder="Номер рейсу"
            className="search-reise__input"
            value={searchData}
            onChange={onChange}
          />
          <button
            onClick={() => flightSearch(searchData)}
            className="search-reise__submit"
          >
            ЗНАЙТИ
          </button>
        </div>
      </div>
    </section>
  );
}

const mapDispatch = {
  flightSearch: airportAction.flightSearch,
};

export default connect(null, mapDispatch)(Search);
