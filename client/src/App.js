import React from 'react';
import UI from './components/UI';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

//Redux store
const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      {/*React router wrapper must be higher order, so it's here.*/}
      <BrowserRouter>
        <UI />
      </BrowserRouter>
    </Provider>
  );
}

export default App;