const mongoose = require("mongoose");

const { Schema } = mongoose;

const PeopleSchema = new Schema({
  name: {
    type: String,
    required: [true, "must be an name or username "],
    trim: true,
    maxLength: [20, "Has to be 20 or less"],
  },
  job: { type: [""], trim: true },
  descriptions: { type: String, trim: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("peoples", PeopleSchema);
