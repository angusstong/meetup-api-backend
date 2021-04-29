const express = require("express");
require("dotenv").config();
require("./db/mongoose");
const Meetup = require("./models/meetup");

const app = express();
var cors = require("cors");

app.use(cors());
const port = process.env.PORT || 3001;

app.use(express.json());

app.post("/meetups", (req, res) => {
  const meetup = new Meetup(req.body);
  meetup
    .save()
    .then(() => {
      res.send(meetup);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.get("/meetups", (req, res) => {
  Meetup.find({})
    .then((meetups) => {
      res.send(meetups);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
