import express from "express";
import { custom_response } from "../utils/response";
import NoteSchema from "../models/Note";
import { checkAuth } from "../utils/checkAuth";

import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

export const getNotes = async (req: express.Request, res: express.Response) => {
  // get user id from token for notes
  const isAuth = checkAuth(req.headers.authorization);
  if (isAuth.error) {
    return res.send(
      custom_response(0, true, "An error has occured", isAuth.error)
    );
  }
  if (!isAuth.userId) {
    return res.send(custom_response(0, true, "user must be logged in", {}));
  }

  const notes = await NoteSchema.find({ userId: isAuth.userId });

  if (!notes) {
    return res.send(custom_response(0, true, "Notes not found", {}));
  }

  return res.send(custom_response(1, false, "", notes));
};

export const setNotes = async (req: express.Request, res: express.Response) => {
  // get boot_id and note from body
  const { bookId, note } = req.body;

  console.log(req.body)

  const isAuth = checkAuth(req.headers.authorization);
  if (isAuth.error) {
    return res.send(
      custom_response(0, true, "An error has occured", isAuth.error)
    );
  }
  if (!isAuth.userId) {
    return res.send(custom_response(0, true, "user must be logged in", {}));
  }

  const new_note = new NoteSchema({
    bookId: ObjectId(bookId),
    userId: ObjectId(isAuth.userId),
    note: note,
  });

  await new_note.save();

  return res.send(
    custom_response(0, true, "note has been saved successfully!", {})
  );
};

export const editNote = async (req: express.Request, res: express.Response) => {
  // get boot_id and note from body
  const { book_id, note } = req.body;

  const isAuth = checkAuth(req.headers.authorization);
  if (isAuth.error) {
    return res.send(
      custom_response(0, true, "An error has occured", isAuth.error)
    );
  }
  if (!isAuth.userId) {
    return res.send(custom_response(0, true, "user must be logged in", {}));
  }

  const new_note = await NoteSchema.findOneAndUpdate(
    { bookId: book_id, userId: isAuth.userId },
    { $set: { note: note } },
    { new: true }
  );

  return res.send(
    custom_response(0, true, "note has been updated successfully!", new_note)
  );
};
