const express = require("express");
const router = express.Router();

import { getNotes, setNotes } from "../controllers/note";

router.get("/getNote", getNotes);
router.post("/setNote", setNotes);

module.exports = router;
