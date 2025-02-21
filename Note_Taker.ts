let greetingMessage : string = "Hello, World!";
console.log(greetingMessage); // Output: Hello, World!

interface Note {
  id: number;
  content: string;
}

class NoteApp {
    private notes: Note[] = [];
    private nextId: number = 1;
    addNote(content: string): void {
      const note: Note = {
        id: this.nextId++,
        content,
      };
      this.notes.push(note);
      console.log(`Note added: ${note.content}`);
    }
    deleteNote(id: number): void {
      this.notes = this.notes.filter(note => note.id !== id);
      console.log(`Note with ID ${id} deleted.`);
    }
    listNotes(): void {
        this.notes.forEach(note => {
          window.alert(`ID: ${note.id}, Content: ${note.content}`);
        });
    }
}

const app = new NoteApp();

let end: string = "";
while (end !== "4") {
  let choice = prompt("1. Add Note\n2. Delete Note\n3. List Notes\n4. Exit\nEnter your choice: ");
  if (choice === "1") {
    let content = prompt("Enter note content: ");
    if (content !== null) {
      app.addNote(content);
    } else {
      window.prompt("Note content cannot be empty.");
    }
  } else if (choice === "2") {
    let first = prompt("Enter note ID: ");
    if (first !== null) {
      let id = parseInt(first);
      app.deleteNote(id);
    } else {
      window.prompt("ID cannot be empty.");
    }
  } else if (choice === "3") {
    app.listNotes();
  } else if (choice === "4") {
    end = "4";
  } else {
    window.prompt("Invalid choice. Please try again.");
  }
}