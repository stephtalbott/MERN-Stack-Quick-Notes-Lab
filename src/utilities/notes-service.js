import * as notesApi from "./notes-api";

export async function createNote(noteData) {
    console.log("this is noteData in notes-service", noteData);
    const note = await notesApi.createNote(noteData);

    return note;
}

