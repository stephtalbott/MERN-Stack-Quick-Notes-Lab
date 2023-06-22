import { useState, useEffect } from "react";
import { createNote } from "../../utilities/notes-service";
import * as notesAPI from "../../utilities/notes-api";
import Note from "../../components/Note/Note";

export default function NotesIndexPage({ user }) {
    const [notes, setNotes] = useState([]);
    const [newNoteText, setNewNoteText] = useState({ text: ''});

    async function handleSubmit(event) {
        event.preventDefault();
        const newNote = {
        text: newNoteText.text,
        user: user._id,
        };
        const note = await createNote(newNote);
        setNotes([...notes, note]);
        console.log('these are all the notes', notes);
        console.log('this is the user in handleSubmit', user);
        setNewNoteText({text: ''});
    };

    function handleChange(event) {
        setNewNoteText({
            ...newNoteText,
            [event.target.name]: event.target.value,
        });
        console.log('newNotetext in handleChange', newNoteText);
    }

    useEffect(function() {
        async function getNotes() {
            const notes = await notesAPI.getNotes();
            setNotes(notes);
        }
        getNotes()
    }, [])

        const noteItems = notes.map(note =>
        <Note
        key={note._id}
        note={note}
    />
)

    return (
        <div>
        <h1>{notes.length === 0 ? "No Notes Yet!" : "Notes"}</h1>

        <form onSubmit={handleSubmit}>
            <textarea
            name="text"
            value={newNoteText.text}
            onChange={handleChange}
            />
            <button type="submit">Add Note</button>
        </form>

        {/* List of Notes */}
        {notes.length === 0 ? (
            <p>No notes yet!</p>
        ) : (
            <>
                {noteItems}
            </>
        )}
        </div>
    );
}

