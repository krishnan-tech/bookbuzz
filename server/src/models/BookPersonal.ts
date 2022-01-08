import mongoose, { Date } from "mongoose";
import { model, Schema } from "mongoose";
import { NoteSchema } from "./Note";

const { ObjectId } = mongoose.Types;

export interface BookPersonal extends Document {
  isPublic: boolean;
  book: string;
  notes: NoteSchema;
  read_pages: {
    date: Date;
    page: number;
  };
  createdAt: string;
  updatedAt: string;
}

const bookPersonalSchema: Schema = new Schema(
  {
    isPublic: {
      type: Boolean,
      require: true,
    },
    book: {
      type: ObjectId,
      ref: "BookGlobal",
    },
    notes: {
      type: ObjectId,
      ref: "Note",
    },
    read_pages: {
      date: Date,
      page: Number,
    },
  },
  { timestamps: true }
);

export default model<BookPersonal>("BookPersonal", bookPersonalSchema);
