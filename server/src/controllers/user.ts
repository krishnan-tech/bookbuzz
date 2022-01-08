import express from "express";
import { checkAuth } from "../utils/checkAuth";
import User from "../models/User";
import { custom_response } from "../utils/response";

export const profile = async (req: express.Request, res: express.Response) => {
  const { userId } = req.params;
  const isAuth = checkAuth(req.headers.authorization);
  if (isAuth.error) {
    return res.send(
      custom_response(0, true, "An error has occured", isAuth.error)
    );
  }
  if (!isAuth.userId) {
    return res.send(custom_response(0, true, "user must be logged in", {}));
  }

  const user = await User.findById(userId);

  if (!user) {
    return res.send(custom_response(0, true, "user does not exists", {}));
  }

  let isSelf = false;
  if (isAuth.userId == userId) {
    isSelf = true;
  }

  let {
    username,
    email,
    currentReading,
    pastReading,
    futureReading,
    friends,
    streak,
    max_streak,
    about,
    has_profile_picture,
  } = user;

  if (!isSelf) {
    email = "";
  }

  return res.send(
    custom_response(1, false, "", {
      username,
      email,
      currentReading,
      pastReading,
      futureReading,
      friends,
      streak,
      max_streak,
      about,
      has_profile_picture,
    })
  );
};

export const friends = async (
  _req: express.Request,
  _res: express.Response
) => {
  // user1 user_id from token
  // user2 id from req.body
  // add to user.ts in friends array.
};
