const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const { User } = require('../models');

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  'login',
  new localStrategy(
    {
      username: 'username',
      password: 'password'
    },
    async (username, password, done) => {
      
      try {
        const user = await User.findOne({ username }).catch(function (error) {
          var UserNotFound = error instanceof User.NotFoundError
          return !UserNotFound
        });
        
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.toJSON().password === password;

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }
        
        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        console.log(error);
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'USER_TOKEN',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      console.log("token", token);
      
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);