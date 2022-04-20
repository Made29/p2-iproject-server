const express = require("express");
const authentication = require("../middleware/authentication");
const router = express.Router();
const stock = require("./stock");
const user = require("./user");
const xendit = require("./xendit");

router.use(user);

router.use(xendit)

router.use(authentication, stock);

module.exports = router;
