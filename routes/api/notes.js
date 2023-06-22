const express = require("express");
const router = express.Router();
const notesCtrl = require("../../controllers/api/notes");
// const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post('/', notesCtrl.createNote)
router.get('/', notesCtrl.index)

module.exports = router;