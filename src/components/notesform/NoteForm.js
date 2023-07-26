import React, { useContext, useState } from "react";
import { NotesContext } from "../../utils/NotesContext";

export default function NoteForm () {
    const {addNote} = useContext(NotesContext);
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addNote(content);
        setContent("")
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">Add Note</button>
        </form>
      );
}