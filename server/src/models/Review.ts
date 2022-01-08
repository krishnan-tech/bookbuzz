import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const { ObjectId } = mongoose.Types;

export interface ReviewSchema extends Document {
  bookId: string;
  userId: string;
  review: string;
  star: number;
  createdAt: string;
  updatedAt: string;
}

const ReviewSchema: Schema = new Schema(
  {
    bookId: {
      type: ObjectId,
      ref: "BookGlobal",
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
    review: {
      type: String,
    },
    star: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default model<ReviewSchema>("Review", ReviewSchema);
