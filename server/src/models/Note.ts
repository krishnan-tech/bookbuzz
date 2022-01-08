import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const { ObjectId } = mongoose.Types;

export interface NoteSchema extends Document {
  bookId: string;
  userId: string;
  note: string;
  createdAt: string;
  updatedAt: string;
}

const NoteSchema: Schema = new Schema(
  {
    bookId: {
      type: ObjectId,
      ref: "BookGlobal",
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
    note: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<NoteSchema>("Note", NoteSchema);
