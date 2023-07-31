import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NotesContext } from "../../utils/NotesContext";

export default function NoteList() {
  const { notes } = useContext(NotesContext);

  return (
    <div>
      <h4>Note List</h4>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {/* creating a route to display a component with the notes details */}
            <Link to={`/note/${note.id}`}>{note.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
