const express = require("express");
const router = express.Router();

import {
  setBookPersonal,
  getBookPersonal,
  setReadPages,
  getReadPages,
} from "../controllers/bookPersonal";

router.post("/book", setBookPersonal);
router.get("/book/:userId/:bookId", getBookPersonal);
router.post("/setReadPages", setReadPages);
router.get("/getReadPages/:userId/:bookId", getReadPages);

module.exports = router;
