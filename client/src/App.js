import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'; //Provides routing capability for UI component

//Import stylesheet for rest of the app
import './App.scss';

//Import UI
import UI from './components/UI';


//Simple app.js React component in order to render with store, nothing more. All UI code will be in UI.js.
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <UI />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;