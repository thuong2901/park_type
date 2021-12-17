var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var ownRouter = require('./routes/park.owner.router');
var parkUserRouter = require('./routes/park.user.router');
var parkAdminRouter = require('./routes/park.admin.router');
var accountAdminRouter = require('./routes/account.admin.router');
var accountUserRouter = require('./routes/account.user.router');
var chartRouter = require('./routes/chart.admin.router');
var authenRouter = require('./routes/authen.router');
var uploadRouter = require('./routes/upload.image.router');
var config = require('./config');
const { cors, corsWithOptions } = require('./cors');

var app = express();

app.use(corsWithOptions);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(config.cookieKey));

app.use('/', indexRouter);

app.use('/api/authen', authenRouter);


app.use('/api/owner/parks', ownRouter);
app.use('/api/parks', parkUserRouter);
app.use('/api/accounts', accountUserRouter);
app.use('/api/admin/parks', parkAdminRouter);
app.use('/api/admin/accounts', accountAdminRouter);
app.use('/api/admin/charts', chartRouter);
app.use('/api/upload/parks', uploadRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({message: "Error"});
});

module.exports = app;
