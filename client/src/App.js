import React, { Component} from 'react';
import './App.scss';
import variables from './variables.module.scss';

//Simple app.js React component in order to render with store, nothing more. All UI code will be in UI.js.
class App extends Component{
  render(){
    return(
      <div className="App" style={{backgroundColor: variables.testColor}}>
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default App;