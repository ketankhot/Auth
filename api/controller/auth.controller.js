import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  // Incoming data from the user and destructre it
  const { email, username, password } = req.body;
  // const salt = 10;
  // Creating the hashedPassword using bcryptjs
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // Creating the new user
  const newUser = new User({ email, username, password: hashedPassword });

  try {
    // Now it's save to the Database
    await newUser.save();

    // Sending the Status to the API
    res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};
