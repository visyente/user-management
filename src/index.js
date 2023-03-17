const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./auth/auth');

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');
const getAllUser = require('./routes/getAllUser');
const createUser = require('./routes/createUser');
const updateUser = require('./routes/updateUser');
const removeUser = require('./routes/removeUser');
const multipeRemoveUser = require('./routes/multipleRemoveUser')

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

app.use('/', routes);

app.use('/user', passport.authenticate('jwt', { session: false }), getAllUser);
app.use('/user', passport.authenticate('jwt', { session: false }), createUser);
app.use('/user/update', passport.authenticate('jwt', { session: false }), updateUser);
app.use('/user/remove', passport.authenticate('jwt', { session: false }), removeUser);
app.use('/user', passport.authenticate('jwt', { session: false }), multipeRemoveUser);


app.use(function(err, req, res, next) {
  console.log(err);
  
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});