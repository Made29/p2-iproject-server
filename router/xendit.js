const express = require("express");
const router = express.Router();
const Controller = require('../Controllers/xendit');

router.post("/xendit", Controller.xendit)

module.exports = router;
