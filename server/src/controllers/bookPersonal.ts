import { summary } from "date-streaks";
import express from "express";
import BookGlobal from "../models/BookGlobal";
import BookPersonal from "../models/BookPersonal";
import User from "../models/User";
import { checkAuth } from "../utils/checkAuth";
import { custom_response } from "../utils/response";

export const setBookPersonal = async (
  req: express.Request,
  res: express.Response
) => {
  // what we get from frontend -> book_id
  const { bookId, userId } = req.body;

  if (!bookId) {
    return res.send(custom_response(0, true, "book id is missing!", {}));
  }

  const book_data = await BookGlobal.findById(bookId);
  const user = await User.findById(userId);

  if (!book_data) {
    return res.send(custom_response(0, true, "Book does not exists", {}));
  }

  const book_personal = new BookPersonal({
    isPubic: true,
    book: book_data,
    notes: [],
    read_pages: [],
    user: user,
  });

  await book_personal.save();

  return res.send(custom_response(1, false, "", book_personal));
};

export const getBookPersonal = async (
  req: express.Request,
  res: express.Response
) => {
  // what we get from frontend -> book_id
  const { bookId, userId } = req.params;

  if (!bookId) {
    return res.send(custom_response(0, true, "book id is missing!", {}));
  }

  const book_data = await BookGlobal.findById(bookId).populate("BookGlobal");
  const user = await User.findById(userId);

  if (!book_data) {
    return res.send(custom_response(0, true, "Book does not exists", {}));
  }

  console.log(book_data);

  const book_personal = new BookPersonal({
    isPubic: true,
    book: book_data,
    user: user,
  });

  return res.send(custom_response(1, false, "", book_personal));
};

export const setReadPages = async (
  req: express.Request,
  res: express.Response
) => {
  const { pages, bookId } = req.body;

  const isAuth = checkAuth(req.headers.authorization);
  if (isAuth.error) {
    return res.send(
      custom_response(0, true, "An error has occured", isAuth.error)
    );
  }
  if (!isAuth.userId) {
    return res.send(custom_response(0, true, "user must be logged in", {}));
  }

  if (!bookId) {
    return res.send(custom_response(0, true, "book id is missing!", {}));
  }

  const book_data = await BookPersonal.findOne({
    book: bookId,
    user: isAuth.userId,
  });

  if (!book_data) {
    return res.send(custom_response(0, true, "Book does not exists", {}));
  }

  const new_data = await BookPersonal.findOneAndUpdate(
    { book: bookId },
    {
      $push: {
        read_pages: {
          date: new Date(),
          page: pages,
        },
      },
    },
    { new: true }
  );

  return res.send(custom_response(1, false, "", new_data));
};

export const getReadPages = async (
  req: express.Request,
  res: express.Response
) => {
  const { bookId, userId } = req.params;

  if (!bookId) {
    return res.send(custom_response(0, true, "book id is missing!", {}));
  }

  const book_data = await BookPersonal.findOne({
    book: bookId,
  });

  if (!book_data) {
    return res.send(custom_response(0, true, "Book does not exists", {}));
  }

  const new_data = await BookPersonal.findOne({ book: bookId, user: userId });

  if (!new_data) {
    return res.send(custom_response(0, true, "No read pages", {}));
  }

  let dates: string[] = [];
  new_data.read_pages.map((page, _i) => {
    dates.push(page.date as unknown as string);
  });

  const streak_summary = summary({ dates });

  // update user profile streak
  await User.findByIdAndUpdate(userId, {
    $set: {
      streak: streak_summary.currentStreak,
      max_streak: streak_summary.longestStreak,
    },
  });

  return res.send(custom_response(1, false, "", new_data));
};
