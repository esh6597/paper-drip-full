//Contains series of middleware used specifically
//  to authenticate different types of users.
//This application uses JSON web tokens for authentication,
//  as it scales much more easily than sessions.

//Authentication middleware for Node.js
const passport = require('passport');

//Creates, signs and verifies tokens
const jwt = require('jsonwebtoken');

const User = require('./models/user');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('./config.js');

//Signs with secret key in excluded config.js
exports.getToken = user => {
  return jwt.sign(user, config.secretKey, {expiresIn: 3600});
};

//Options for JWT strategy below
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;


exports.jwtPassport = passport.use(
  new JwtStrategy(
      opts,
      (jwt_payload, done) => {
          console.log('JWT payload:', jwt_payload);
          User.findOne({_id: jwt_payload._id}, (err, user) => {
              if (err) {
                  return done(err, false);
              } else if (user) {
                  return done(null, user);
              } else {
                  return done(null, false);
              }
          });
      }
  )
);

exports.verifyUser = passport.authenticate('jwt', {session: false});