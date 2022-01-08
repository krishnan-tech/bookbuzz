const express = require("express");
const router = express.Router();

import { profile } from "../controllers/user";

router.get("/profile/:userId", profile);

module.exports = router;
