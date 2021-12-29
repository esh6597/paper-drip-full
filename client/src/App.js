//TOP LEVEL REACT COMPONENT

import React from 'react';
import { Provider } from 'react-redux';
import UI from './components/UI';
import Store from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

const App = () => {
  return (
    <Provider store={Store}>
      {/*React router wrapper must be higher order, so it's here.*/}
      <BrowserRouter>
        <UI />
      </BrowserRouter>
    </Provider>
  );
}

export default App;