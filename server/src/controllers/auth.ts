import express from "express";
import User, { UserSchema } from "../models/User";
import jwt from "jsonwebtoken";

export const signup = async (req: express.Request, res: express.Response) => {
  // for user validation use -> ./validator/index.js {userSignupValidator}
  const { email, username } = req.body;
  if (!email || !username) {
    return res.status(404).json({ error: "username or email is empty" });
  }
  const userExists = await User.findOne({
    $or: [{ email: email }, { username: username }],
  });
  if (userExists)
    return res.status(403).json({
      error: "Username or Email has been taken!",
    });
  else {
    const user = await new User(req.body);
    user.username = user.username.toLowerCase();
    user.email = user.email.toLowerCase();
    await user.save();
    return res.status(200).json({ message: "Signup success! Please Login..." });
  }
};

// @ts-ignore
export const signin = (req: express.Request, res: express.Response) => {
  // find the user based on email
  var { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ error: "email or passowrd is empty" });
  }
  email = email.toLowerCase();
  User.findOne({ email }, (err: any, user: UserSchema) => {
    if (err || !user) {
      return res.status(401).json({
        error: "User with that email does not exist. Please Signup.",
      });
    }
    // if user is found make sure the email and pass matches
    //create authenticate method in model and use here.
    if (!user.authenticate(password)) {
      return res.status(403).json({
        error: "Email and password do not match!",
      });
    }

    //generate a token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string);
    //persist response with user and token to frontend client
    // @ts-ignore
    res.cookie("t", token, { expire: new Date() + 9999 });
    //return response with user and token to frontend clients
    const { _id, username, email } = user;
    return res.json({ token, user: { _id, email, username } });
  });
};

export const signout = (_req: express.Request, res: express.Response) => {
  res.clearCookie("t");
  return res.json({ message: "Signout Success!" });
};
