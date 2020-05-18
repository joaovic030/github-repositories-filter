var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
require('dotenv').config()

var indexRouter = require('./routes/index');
const github = require('./api/github')

var app = express();

app.use(cors());

app.use('/repositories', indexRouter);

app.get('/languages', async function(req, res) {
  const response = await github.getLanguages()
  res.send({languages: response})
})

app.get('/repositories/:lang', async function(req, res) {
  try {
    const response = await github.findRepositoriesByLanguage(req.params.lang)
    res.send({repositories: response.data.items})
  } catch (error) {
    console.log(error)
  }
})

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
  res.render('error');
});

module.exports = app;
