import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    task: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
  {
    email: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    task: {
      type: String,
      require: true,
    },

  }

);

const User = models.User || mongoose.model("User", userSchema);

export default User;
