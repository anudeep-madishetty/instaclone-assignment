const mongoose = require("mongoose");
const instaCloneSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  PostImage: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const instaModel = mongoose.model("Instaclone", instaCloneSchema);

module.exports = instaModel;
