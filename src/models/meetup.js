const mongoose = require("mongoose");

const Meetup = mongoose.model("Meetup", {
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = Meetup;
