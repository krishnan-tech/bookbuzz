import { model, Schema } from "mongoose";

export interface MessageSchema extends Document {
  bookId: string;
  sender: {
    senderId: string;
    sendername: string;
  };
  text: string;
}

const messageSchema: Schema = new Schema(
  {
    bookId: {
      type: String,
      require: true,
    },
    senderId: {
      type: String,
    },
    senderName: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<MessageSchema>("Message", messageSchema);
