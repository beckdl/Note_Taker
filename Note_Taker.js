var greetingMessage = "Hello, World!";
console.log(greetingMessage); // Output: Hello, World!
var NoteApp = /** @class */ (function () {
    function NoteApp() {
        this.notes = [];
        this.nextId = 1;
    }
    NoteApp.prototype.addNote = function (content) {
        var note = {
            id: this.nextId++,
            content: content,
        };
        this.notes.push(note);
        console.log("Note added: ".concat(note.content));
    };
    NoteApp.prototype.deleteNote = function (id) {
        this.notes = this.notes.filter(function (note) { return note.id !== id; });
        console.log("Note with ID ".concat(id, " deleted."));
    };
    NoteApp.prototype.listNotes = function () {
        this.notes.forEach(function (note) {
            window.alert("ID: ".concat(note.id, ", Content: ").concat(note.content));
        });
    };
    return NoteApp;
}());
var app = new NoteApp();
var end = "";
while (end !== "4") {
    var choice = prompt("1. Add Note\n2. Delete Note\n3. List Notes\n4. Exit\nEnter your choice: ");
    if (choice === "1") {
        var content = prompt("Enter note content: ");
        if (content !== null) {
            app.addNote(content);
        }
        else {
            window.prompt("Note content cannot be empty.");
        }
    }
    else if (choice === "2") {
        var first = prompt("Enter note ID: ");
        if (first !== null) {
            var id = parseInt(first);
            app.deleteNote(id);
        }
        else {
            window.prompt("ID cannot be empty.");
        }
    }
    else if (choice === "3") {
        app.listNotes();
    }
    else if (choice === "4") {
        end = "4";
    }
    else {
        window.prompt("Invalid choice. Please try again.");
    }
}
