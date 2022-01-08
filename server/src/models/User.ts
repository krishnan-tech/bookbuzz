import mongoose from "mongoose";
import { Document, model, Schema } from "mongoose";
import { v4 as uuid_v4 } from "uuid";
import crypto from "crypto";

const { ObjectId } = mongoose.Types;

export interface UserSchema extends Document {
  _doc: UserSchema;
  authenticate(password: string): Boolean;
  _id: string;
  username: string;
  password: string;
  email: string;
  photo: {
    data: Buffer;
    contentType: string;
  };
  has_profile_picture: boolean;
  hashed_password: string;
  salt: string;
  about: string;
  passwordResetToken: string;
  passwordResetTokenExpiry: number;
  currentReading: string[];
  futureReading: string[];
  pastReading: string[];
  friends: string[];
  streak: number;
  max_streak: number;
  createdAt: string;
  updatedAt: string;
}

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    has_profile_picture: {
      type: Boolean,
      default: false,
    },
    hashed_password: {
      type: String,
      require: true,
    },
    salt: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
      default: "",
    },
    friends: [{ type: ObjectId, ref: "User" }],
    futureReading: [{ type: ObjectId, ref: "BookGlobal" }],
    currentReading: [{ type: ObjectId, ref: "BookGlobal" }],
    pastReading: [{ type: ObjectId, ref: "BookGlobal" }],
    streak: {
      type: Number,
      default: 0,
    },
    max_streak: {
      type: Number,
      default: 0,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetTokenExpiry: {
      type: Number,
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (
    this: { _password: string; salt: string; hashed_password: string },
    password: string
  ) {
    //create temporary variable called _password
    this._password = password;
    // this._password = password;
    //generate  a timestamp
    this.salt = uuid_v4();
    //encryptPassword()
    this.hashed_password = encryptPassword(password, this.salt);
  })
  .get(function (this: { _password: string }) {
    return this._password;
  });

// methods;
userSchema.methods = {
  authenticate: function (this: any, plainText) {
    return encryptPassword(plainText, this.salt) === this.hashed_password;
  },
};

const encryptPassword = (password: string, salt: string) => {
  if (!password) return "";
  try {
    return crypto.createHmac("sha1", salt).update(password).digest("hex");
  } catch (err) {
    return "";
  }
};

export default model<UserSchema>("User", userSchema);
