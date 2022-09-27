const Peoples = require("../models/index");

const getAllPeople = async (req, res) => {
  try {
    const people = await Peoples.find({});
    res.status(200).json({ people });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addPeopleToDB = async (req, res) => {
  try {
    const people = await Peoples.create(req.body);
    res.status(200).json({ people });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const filterByID = (req, res) => {
  res.send("hello");
};

const deleteByID = async (req, res) => {
  try {
    const { id: peopleID } = req.params;
    const people = await Peoples.findOneAndDelete({ _id: peopleID });
    if (!people) {
      return res
        .status(404)
        .json({ msg: `no people id with the: ${peopleID}` });
    }
    res.status(200).json({ people });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllPeople,
  addPeopleToDB,
  filterByID,
  deleteByID,
};
