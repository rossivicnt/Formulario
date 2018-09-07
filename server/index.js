const express= require('express');
const cors = require('cors');
const morgan= require('morgan');
const pass = require('passport');
const app= express();

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
}));

const mongoose= require('mongoose');

const URI='mongodb://localhost:27017/proyecto1';

mongoose.connect(URI)
    .then(db=>console.log('DB is connected'))
    .catch(err=>console.error(err));

var passport = require('passport');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  name:'myname.sid',
  resave:false,
  saveUninitialized:false,
  secret:'secret',
  cookie:{
    maxAge:36000000,
    httpOnly:false,
    secure:false
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(pass.initialize());
app.use('/api/users',require('./routes/users.routes'));
app.use('/api/form1',require('./routes/forms1.routes'));
app.use('/api/form2',require('./routes/forms2.routes'));
app.use('/api/export1',require('./routes/export1.routes'));

//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});

//catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  module.exports = app;