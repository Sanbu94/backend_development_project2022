const express = require("express");
const {
  createSleep,
  getSleepyHead,
  getSleepyHeadById,
  updateSleep,
  deleteSleep,
} = require("../controllers/sleepyhead");

const router = express.Router();

router.get("/", getSleepyHead);
router.get("/:id", getSleepyHeadById);
router.post("/", createSleep);
router.put("/", updateSleep);
router.delete("/:id", deleteSleep);

module.exports = router;
