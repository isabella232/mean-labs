const express = require("express");

const labnoteController = require("../controllers/labnote");
const router = express.Router();

router.post('', labnoteController.createLabNote);
router.get('', labnoteController.getNotes);
module.exports = router;
