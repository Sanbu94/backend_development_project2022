const express = require("express");

const SleepyHeadRouter = require("./routes/sleepyhead");

const app = express();

app.use(express.json());

app.use("/api/sleepyhead", SleepyHeadRouter);

module.exports = app;
