import express from "express";
import { custom_response } from "../utils/response";
import BookGlobalSchema, { BookGlobalSchemaType } from "../models/BookGlobal";
import BookGlobal from "../models/BookGlobal";
import { checkAuth } from "../utils/checkAuth";
import User from "../models/User";

export const book = async (req: express.Request, res: express.Response) => {
  // what we get from frontend -> book_id
  const { bookId } = req.params;

  if (!bookId) {
    return res.send(custom_response(0, true, "book id is missing!", {}));
  }

  const book_data: BookGlobalSchemaType | null =
    await BookGlobalSchema.findById(bookId);

  if (!book_data) {
    return res.send(custom_response(0, true, "Book does not exists", {}));
  }

  const {
    _id,
    tags,
    reviews,
    name,
    description,
    author,
    amazon_link,
    createdAt,
    updatedAt,
  } = book_data;

  return res.send(
    custom_response(1, false, "", {
      _id,
      tags,
      reviews,
      name,
      description,
      author,
      amazon_link,
      createdAt,
      updatedAt,
    })
  );
};

export const getAllBooks = async (
  _req: express.Request,
  res: express.Response
) => {
  const books = await BookGlobal.find();
  return res.send(custom_response(1, false, "", books));
};

export const addToCurrentReading = async (
  req: express.Request,
  res: express.Response
) => {
  const { addToCurrentReading } = req.body;

  const isAuth = checkAuth(req.headers.authorization);
  if (isAuth.error) {
    return res.send(
      custom_response(0, true, "An error has occured", isAuth.error)
    );
  }
  if (!isAuth.userId) {
    return res.send(custom_response(0, true, "user must be logged in", {}));
  }

  if (!addToCurrentReading) {
    return res.send(custom_response(0, true, "book id is missing!", {}));
  }

  const new_data = await User.findOneAndUpdate(
    { _id: isAuth.userId },
    {
      $push: {
        currentReading: addToCurrentReading,
      },
    },
    { new: true }
  );

  return res.send(custom_response(1, false, "", new_data));
};
