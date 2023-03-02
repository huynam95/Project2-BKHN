const express = require('express');

const userRouter = require('./routes/userRoutes');
const loginRouter = require('./routes/loginRoutes');

const app = express();

// 1) MIDDLEWARES
app.use(express.json());

// 3) ROUTES
app.use('/users', userRouter);
app.use('/login', loginRouter);

module.exports = app;
