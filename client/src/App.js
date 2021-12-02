import React, { Component} from "react";
import "./App.scss";

//Simple app.js React component in order to render with store, nothing more. All UI code will be in UI.js.
class App extends Component{
  render(){
    console.log('App served!');
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default App;