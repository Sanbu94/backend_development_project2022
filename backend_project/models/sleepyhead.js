const connection = require("../database/connection");

const sleepyhead = {
  findAll: () =>
    new Promise((resolve, reject) => {
      connection.query("SELECT * FROM sleepyhead;", (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  findById: (id) =>
    new Promise((resolve, reject) => {
      const selectQuery = "SELECT * FROM sleepyhead WHERE id=?;";
      connection.query(selectQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  save: (sleep) =>
    new Promise((resolve, reject) => {
      connection.query("INSERT INTO sleepyhead SET ?", sleep, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),
  deleteById: (id) =>
    new Promise((resolve, reject) => {
      const deleteQuery = "DELETE FROM sleepyhead WHERE id=?;";
      connection.query(deleteQuery, id, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    }),

  updateById: (sleep) =>
    new Promise((resolve, reject) => {
      const updateQuery =
        "UPDATE sleepyhead SET month = ?, sleepyhead.start = ?, sleepyhead.end = ?, sleepyhead.amount = ? WHERE id = ?;";
      connection.query(
        updateQuery,
        [sleep.month, sleep.start, sleep.end, sleep.amount, sleep.id],
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    }),
};
module.exports = sleepyhead;
