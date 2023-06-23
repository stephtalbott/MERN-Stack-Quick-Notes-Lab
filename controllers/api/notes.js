const Note = require("../../models/note");

async function createNote(req, res) {
    try {
        const note = await Note.create(req.body);
        res.json(note);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function index(req, res) {
    const notes = await Note.find({user: req.user._id})
    res.json(notes);
}

module.exports = {
    createNote,
    index,
};
