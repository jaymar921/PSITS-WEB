import mongoose from "mongoose";

const EventModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  photo_img_links: {
    type: Array,
    required: false,
    default: new Array(),
  },
});

export default mongoose.model("Event", EventModel);
