const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const instaClone = require("./models/instadata");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost/instaClone", (err) => {
  if (err) console.log(err);
  else console.log("connected to db");
});

app.get("/user", async (req, res) => {
  const Data = await instaClone.find().sort({ date: -1 });
  //   console.log(Data);
  res.json({ data: Data });
});

app.post("/user", async (req, res) => {
  console.log("post body", req.body);
  // console.log(req.body.formData.author);
  var data = new instaClone({
    name: req.body.formData.author,
    location: req.body.formData.location,
    likes: req.body.formData.likes,
    description: req.body.formData.description,
    PostImage: req.body.formData.file,
    date: new Date(),
  });

  // await instaClone.save();
  data.save().then((item) => {
    res.json({ status: "success" });
  });

  console.log("after post body");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log("app is listening on ", PORT);
});
