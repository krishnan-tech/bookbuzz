const express = require("express");
const router = express.Router();

import { getReview, setReview } from "../controllers/review";

router.get("/getReview/:bookId", getReview);
router.post("/setReview", setReview);

module.exports = router;
