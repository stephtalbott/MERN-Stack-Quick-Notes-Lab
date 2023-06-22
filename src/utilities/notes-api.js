import sendRequest from "./send-request";
// we need a base path that we can use to refer our requests to the location of our routes
const BASE_URL = "/api/notes";

export async function createNote(noteData) {
    return sendRequest(BASE_URL, "POST", noteData);
}

export async function getNotes(){
    return sendRequest(BASE_URL)
}
