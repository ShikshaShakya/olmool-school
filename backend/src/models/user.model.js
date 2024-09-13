import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
  },
  eventName: {
    type: String,
  },
  dob: {
    type: Date,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  schoolName: {
    type: String,
  },
  academyName: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
