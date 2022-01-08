import express from "express";
import BookGlobal from "../models/BookGlobal";
import { custom_response } from "../utils/response";

export const adminAddBook = async (
  req: express.Request,
  res: express.Response
) => {
  // add Book to DB
  // required
  // book_name, description, author_name, tags, amazon_link
  // insert to BookGlobal
  const { name, description, author, tags, amazon_link } = req.body;

  const book = await new BookGlobal({
    name,
    description,
    author,
    tags,
    amazon_link,
  });
  await book.save();
  return res.send(custom_response(1, false, "Added Book Successfully", book));
};
