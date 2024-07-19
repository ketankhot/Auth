import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Creating the Mongoose Database Schema for the user
// Schema is used for the structure of the information store in DB
const userSchema = new mongoose.Schema(
  {
    username: {
      type: Schema.Types.Mixed,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// In databases, particularly in MongoDB, the timestamps: true option is used to automatically add and manage createdAt and updatedAt fields to your schema. These fields store the timestamps for when a document was created and last updated, respectively.

// Creating the Mongoose model for the user schema
const User = mongoose.model("User", userSchema);

// Export
export default User;
