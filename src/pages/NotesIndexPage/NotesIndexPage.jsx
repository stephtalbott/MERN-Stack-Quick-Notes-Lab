import { useState } from "react";

export default function NotesIndexPage({ user }) {
    const [notes, setNotes] = useState([]);
    const [newNoteText, setNewNoteText] = useState("");

    const handleAddNote = (event) => {
        event.preventDefault();
        const newNote = {
        text: newNoteText,
        createdAt: new Date(),
        };
        setNotes([...notes, newNote]);
        setNewNoteText("");
    };

    return (
        <div>
        <h1>{notes.length === 0 ? "No Notes Yet!" : "Notes"}</h1>

        {/* Add Note form */}
        <form onSubmit={handleAddNote}>
            <textarea
            value={newNoteText}
            onChange={(event) => setNewNoteText(event.target.value)}
            />
            <button type="submit">Add Note</button>
        </form>

        {/* List of Notes */}
        {notes.length === 0 ? (
            <p>No notes yet!</p>
        ) : (
            <ul>
            {notes.map((note, index) => (
                <li key={index}>
                <p>{note.text}</p>
                <p>{note.createdAt.toLocaleString()}</p>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
}

