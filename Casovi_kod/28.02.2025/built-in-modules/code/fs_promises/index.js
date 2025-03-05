import path from "path";
import { fileURLToPath } from "url";
import { readNotes, readNoteById, createNote } from "./notesService.js";

const notesFilePath = `.\\data\\notes.json`; // mora da ima vakvi 2 za da raboti za da vlezi vo data i da zemi notes.json

// Creating path via path module
const currentFileUrl = import.meta.url;
const projectPath = fileURLToPath(currentFileUrl);
const notesPath = path.join(projectPath, "data", "notes.json"); // polesno za da definirame relativna pateka i polesno e ova oti so 5ti red mmozi da se napraj greska

const noteToAdd = {
  title: "Coding Notes",
  content: "Learn node.js and fileSystem",
  timestamp: "2025-03-05T08:00:00Z",
};
const notes = await readNoteById(notesFilePath, 3);
const addedNote = await createNote(notesFilePath, noteToAdd);
console.log(addedNote);
console.log(notes);
