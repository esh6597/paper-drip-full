//This is the entry point for our webpack configuration.
//All other JavaScript files will be compiled here, so be sure to link them here.
//This and all other files in this folder will be bundled into bundle.js.
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById("root")); //Renders the React app at the "root" div in index.html.