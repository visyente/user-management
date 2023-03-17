const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err) {
            const error = new Error('An error occurred.');
            return next(error);
          }else if(!user){
            return res.json({message: info.message})
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: body }, 'USER_TOKEN');

              console.log("token", token);
              

              return res.json({ token });
            }
          );
        } catch (error) {
          console.log(error);
          return next(error);
        }
      }
    )(req, res, next);
  }
);

module.exports = router;