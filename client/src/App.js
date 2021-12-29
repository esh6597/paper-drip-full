import React from 'react';
import { Provider } from 'react-redux';
import UI from './components/UI';
import ConfigureStore from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

//Redux store
const store = ConfigureStore();

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