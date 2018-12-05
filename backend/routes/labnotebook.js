const express = require("express");

const labnoteController = require("../controllers/labnote");
const router = express.Router();

router.post('', labnoteController.createLabNote);
router.get('', labnoteController.getNotes);
router.get('/:id', labnoteController.getNote);
router.put('/:id', labnoteController.updateNote);
module.exports = router;
