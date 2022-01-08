import { ReviewSchema } from "./Review";
import { Document, model, Schema } from "mongoose";
export interface BookGlobalSchemaType extends Document {
  _id: string;
  name: string;
  description: string;
  photo: {
    data: Buffer;
    contentType: string;
  };
  author: string;
  tags: string[];
  amazon_link: string;
  reviews: ReviewSchema;
  createdAt: Date;
  updatedAt: Date;
}

const bookGlobalSchema: Schema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    author: {
      type: String,
      required: true,
    },
    tags: [{ type: String }],
    amazon_link: {
      type: String,
    },
    reviews: [{ type: String, ref: "Review" }],
  },
  { timestamps: true }
);

export default model<BookGlobalSchemaType>("BookGlobal", bookGlobalSchema);
