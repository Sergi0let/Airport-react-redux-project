import React from 'react';
import { Provider } from 'react-redux';

import Main from './componets/flights/Main.jsx';
import store from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
