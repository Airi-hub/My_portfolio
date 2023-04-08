const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Routes
const indexRouter = require('./routes/index');
const userProfileRoutes = require('./routes/userProfileRoutes');
const projectRoutes = require('./routes/projectRoutes');
const socialLinkRoutes = require('./routes/socialLinkRoutes');
const skillRoutes = require('./routes/skillRoutes');
const likeRoutes = require('./routes/likeRoutes');


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Mount routes
app.use('/', indexRouter);
app.use('/api/profile', userProfileRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/socials', socialLinkRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/likes', likeRoutes);


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
