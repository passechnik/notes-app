import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNote({
    id: 828588,
    title: "New Note!",
    body:"I am a new note that has changed."
});

console.log(NotesAPI.getAllNotes());