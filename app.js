const express = require("express");

const userRouter = require("./routes/userRoutes");

const app = express();

// 1) MIDDLEWARES
app.use(express.json());

// 3) ROUTES
app.use("/users", userRouter);

module.exports = app;
