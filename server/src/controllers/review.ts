import express from "express";
import { custom_response } from "../utils/response";
import ReviewSchema from "../models/Review";
import { checkAuth } from "../utils/checkAuth";

import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

export const getReview = async (
  req: express.Request,
  res: express.Response
) => {
  // get user id from token for reviews
  // const isAuth = checkAuth(req.headers.authorization);
  // if (isAuth.error) {
  //   return res.send(
  //     custom_response(0, true, "An error has occured", isAuth.error)
  //   );
  // }
  // if (!isAuth.userId) {
  //   return res.send(custom_response(0, true, "user must be logged in", {}));
  // }

  // const reviews = await ReviewSchema.find({ userId: isAuth.userId });

  // --------- New Added -------------
  const { bookId } = req.params;
  const reviews = await ReviewSchema.find({ bookId: bookId });
  // --------- New Added -------------

  if (!reviews) {
    return res.send(custom_response(0, true, "No Reviews", {}));
  }

  return res.send(custom_response(1, false, "", reviews));
};

export const setReview = async (
  req: express.Request,
  res: express.Response
) => {
  // get boot_id and note from body
  const { bookId, review, star } = req.body;

  const isAuth = checkAuth(req.headers.authorization);
  if (isAuth.error) {
    return res.send(
      custom_response(0, true, "An error has occured", isAuth.error)
    );
  }
  if (!isAuth.userId) {
    return res.send(custom_response(0, true, "user must be logged in", {}));
  }

  if (!review || !star) {
    return res.send(
      custom_response(0, true, "reviews or start cannot be None", {})
    );
  }

  const new_review = new ReviewSchema({
    bookId: ObjectId(bookId),
    userId: ObjectId(isAuth.userId),
    review: review,
    star: star,
  });

  await new_review.save();

  return res.send(
    custom_response(0, true, "note has been saved successfully!", {})
  );
};
