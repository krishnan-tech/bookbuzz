const express = require("express");
const router = express.Router();

import { book, getAllBooks, addToCurrentReading } from "../controllers/book";

router.get("/book/:bookId", book);
router.get("/getAllBooks", getAllBooks);
router.post("/addToCurrentReading", addToCurrentReading);

module.exports = router;
