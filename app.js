const express = require('express');
const session = require('express-session');

const userRouter = require('./routes/userRoutes');
const loginRouter = require('./routes/loginRoutes');

const app = express();

// 1) MIDDLEWARES
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3) ROUTES
app.use('/users', userRouter);
app.use('/login', loginRouter);

module.exports = app;
