import express from "express";
import mongoose from "mongoose";
import cors from "cors";
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config Database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected!"))
  .catch((e) => console.log(e));

mongoose.connection.on("error", (err) => {
  console.log(`DB Connection error: ${err.message}`);
});

const PORT = process.env.PORT || 8080;

const messageRoutes = require("./routes/messages");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const profileRoutes = require("./routes/profile");
const bookRoutes = require("./routes/book");
const bookPersonalRoutes = require("./routes/bookPersonal");
const noteRoutes = require("./routes/notes");
const reviewRoutes = require("./routes/review");

app.use("/api", messageRoutes);
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", profileRoutes);
app.use("/api", bookRoutes);
app.use("/api", bookPersonalRoutes);
app.use("/api", noteRoutes);
app.use("/api", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
