import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    notes: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true },

);

const User = models.User || mongoose.model("User", userSchema);

export default User;
