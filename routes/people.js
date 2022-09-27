const express = require("express");
const router = express.Router();
const {
  getAllPeople,
  addPeopleToDB,
  filterByID,
  deleteByID,
} = require("../controllers/people");

router.route("/").get(getAllPeople).post(addPeopleToDB);
router.route("/:id").delete(deleteByID);

module.exports = router;
