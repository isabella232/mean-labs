const express = require("express");

const labnoteController = require("../controllers/labnote");
const router = express.Router();

router.post('', labnoteController.createLabNote);

module.exports = router;
