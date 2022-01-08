const express = require("express");
const router = express.Router();

import { adminAddBook } from "../controllers/admin";

router.post("/adminAddBook", adminAddBook);

module.exports = router;
