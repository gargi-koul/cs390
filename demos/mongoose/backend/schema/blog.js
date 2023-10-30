import {Schema, model} from "mongoose";

// mongo already adds an _id so don't worry about ids
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  prof: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  diff: {
    type: Number,
    required: true,
  },
  recc: {
    type: String,
    required: true,
  },
  

});

export const BlogModel = model("Blog", blogSchema);
