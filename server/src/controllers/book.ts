import express from "express";
import { custom_response } from "../utils/response";
import BookGlobalSchema, { BookGlobalSchemaType } from "../models/BookGlobal";

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
  //
  // fetch user_id book_id from DB get all details and send it as response
  //   return {
  //     book_id,
  //     book_name,
  //     author_name,
  //     rating,
  //     description,
  //     tags,
  //     reviews,
  //     amazon_link,
  //     created_date,
  //     updated_date,
  //   }
};
