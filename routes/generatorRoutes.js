const getText = require("../controllers/generateControllers")
const express = require("express")

const router = express.Router();

router.route("/").post(getText);

module.exports = router;