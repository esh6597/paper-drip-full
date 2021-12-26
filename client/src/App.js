import React, { Component } from 'react';
import UI from './components/UI';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

class App extends Component {

  render () {
    return (
          <Provider store={store}>
            <BrowserRouter>
              <div className="App">
                <UI />
              </div>
            </BrowserRouter>
          </Provider>
    );
  }
}

export default App;