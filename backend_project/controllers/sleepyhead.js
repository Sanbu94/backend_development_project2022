const sleepyhead = require("../models/sleepyhead");

const getSleepyHead = async (req, res) => {
  try {
    const response = await sleepyhead.findAll();
    if (response) {
      res.send(response);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const getSleepyHeadById = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const response = await sleepyhead.findById(id);
    if (response.length === 1) {
      res.send(response[0]);
    } else {
      res.status(404).json("Not Found");
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const createSleep = async (req, res) => {
  const sleep = {
    month: req.body.month,
    start: req.body.start,
    end: req.body.end,
    amount: req.body.amount,
  };

  try {
    const response = await sleepyhead.save(sleep);
    if (response) {
      sleep.id = response.insertId;
      res.send(sleep);
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

const updateSleep = async (req, res) => {
  const sleep = {
    id: req.body.id,
    month: req.body.month,
    start: req.body.start,
    end: req.body.end,
    amount: req.body.amount,
  };
  const response = await sleepyhead.updateById(sleep);
  if (response) {
    res.send(sleep);
  }
};

const deleteSleep = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const response = await sleepyhead.deleteById(id);
  if (response) {
    res.send("Sleep deleted");
  }
};

module.exports = {
  getSleepyHead,
  getSleepyHeadById,
  createSleep,
  updateSleep,
  deleteSleep,
};
