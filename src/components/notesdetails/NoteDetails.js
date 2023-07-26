import React, { useContext, useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { NotesContext } from "../../utils/NotesContext";


export default function NoteDetails () {
    const { notes, updateNote, deleteNote } = useContext(NotesContext);
     // to receive info shared 
     // use params 
     const { id } = useParams();
     // programmatic navigation inside components 
     const history = useNavigate();

     //use memo 
     const note = useMemo(() => notes.find((note) => note.id === id) , [id, notes])

     const [content, setContent] = useState("");


     useEffect(() => {
        if(note && note.content){
            setContent(note.content)
        }
     }, [note])


     const handleUpdate = (event) => {
        event.preventDefault();
        updateNote(id, content)
        history("/")
     }

     const handleDelete = () => {
        deleteNote(id)
        history("/")
     }




    return (
        <div>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <button type="submit">Update Note</button>
          </form>
          <button onClick={handleDelete}>Delete Note</button>
        </div>
      );
}