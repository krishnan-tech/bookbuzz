const express = require("express");
const router = express.Router();

import { book } from "../controllers/book";

router.get("/book/:bookId", book);

module.exports = router;
