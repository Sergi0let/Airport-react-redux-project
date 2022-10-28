import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';

import FlightBoard from './FlightBoard.jsx';

const Main = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <div className="main__container">
          <FlightBoard path="/:arrivedId" />
        </div>
      </BrowserRouter>
    </main>
  );
};
export default Main;
