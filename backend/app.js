var createError = require('http-errors');
var express = require('express');
const jwt = require('jsonwebtoken');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//RUTAS-------------
var indexRouter = require('./routes/index');
//login
var usersRouter = require('./routes/login/users');
var bannersRouter = require('./routes/homepage/banners');
//departaments
var departamentsRouter = require('./routes/departaments/departaments');
var usersDepartamentsRouter = require('./routes/departaments/usersDepartaments');
var categoriesDepartamentsRouter = require('./routes/departaments/categoriesDepartaments');
var cityDepartamentsRouter = require('./routes/departaments/cityDepartaments');
var priceDepartamentsRouter = require('./routes/departaments/priceDepartaments');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Token
app.set("secretKey", "123")


/** HEADER INICIO CORS */
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
  next();
});
app.options("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With,x-access-token"
  );
  res.send(200);
});


//RUTAS--------
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/banners', bannersRouter);
app.use('/departaments',departamentsRouter);
app.use('/departaments/users', usersDepartamentsRouter);
app.use('/departaments/categories', categoriesDepartamentsRouter);
app.use('/departaments/city', cityDepartamentsRouter);
app.use('/departaments/price', priceDepartamentsRouter);




//VALIDAR TOKEN
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Token must be provided" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, req.app.get("secretKey"), function (error, payload) {
    if (error) {
      return res.status(401).json({ message: error.message });
    } else {
      console.log(payload);
      next();
    }
  });
}
app.verifyToken = verifyToken;
// catch 404 and forward to error handler
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
  res.json(err.message);
});

module.exports = app;
