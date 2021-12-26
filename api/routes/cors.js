//CORS config file; currently used to take advantage of preflight requests
const cors = require('cors');

//Allow sharing between HTTP server, HTTPS server, and front end server respectively.
const whitelist = ['http://localhost:3080', 'https://localhost:3443', 'http://localhost:3000'];

//Set CORS origin header to filter requests not on whitelist
const corsOptions = (req, callback) => {
  let corsHeader;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsHeader = {origin: true};
  } else {
    corsHeader = {origin: false};
  }
  callback(null, corsHeader);
};

//Allow all CORS requests from all origins
exports.cors = cors();

//Allow CORS requests fro the origins in whitelist ONLY
exports.corsWithOptions = cors(corsOptions);