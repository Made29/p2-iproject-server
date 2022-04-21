const express = require("express");
const router = express.Router();
const Controller = require('../Controllers/xendit');

router.post("/xendit/:id", Controller.xendit)

module.exports = router;
