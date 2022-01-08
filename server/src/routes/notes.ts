const express = require("express");
const router = express.Router();

import { getNotes, setNotes, editNote } from "../controllers/note";

router.get("/getNote", getNotes);
router.post("/setNote", setNotes);
router.put("/editNote", editNote);

module.exports = router;
