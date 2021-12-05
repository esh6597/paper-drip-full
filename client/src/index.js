//This is the entry point for our webpack configuration of all JavaScript files here.
import React from 'react';
import ReactDOM from 'react-dom';

//Imported Bootstrap here so it could apply to all subcomponents.
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

//Renders the React app at the "root" div in index.html.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);