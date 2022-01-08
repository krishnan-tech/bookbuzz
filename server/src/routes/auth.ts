const express = require("express");
const router = express.Router();

// import from controllers/auth
// these methods you will create next in controllers/auth
import { signup, signin, signout } from "../controllers/auth";

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
