import React, {createContext, useReducer } from "react"
import {v4 as uuidv4} from "uuid"

//Actions 
const ADD_NOTE = "ADD_NOTE"
const DELETE_NOTE = "DELETE_NOTE"
const UPDATE_NOTE = "UPDATE_NOTE"

// reducer 
function notesReducer(state, action) { 
  // needs to access all actions 
  switch(action.type){
    // handling the action of a new note to a state : creates a new array with the existing state 
    // create a new object : note object : id and the content received 
    case ADD_NOTE : 
       return [
         //spread operator syntax 
         ...state,
         {
            id : uuidv4(),
            content : action.payload
         }
       ]   
    case DELETE_NOTE : 
    return state.filter((note) => note.id  !== action.payload);
    case UPDATE_NOTE : 
    return state.map((note) => 
         note.id === action.payload.id ? {...note, content: action.payload.content}  : note 
    );
    default :
    return state;
  }
}



// Payload 
// In this context, a payload refers to the additional data carried by an action object
//  that provides the necessary information to perform a specific action. 


// We now provide our reducer 

// intialize your state : an empty array to be used as the intial state for notes  
const initialNotes = [];
// we need a context object that will be used to share the state and function s relate to notes 
// with other components 
export const NotesContext = createContext();

// we need a component function which will act as our context provider throught the application
// the children prop references the components that will be wrapped inside this provider 
export function NotesProvider({children}){
    const [notes, dispatch] = useReducer(notesReducer,initialNotes)

    // here in a provider we get to specify the payload content required for actions 
    const addNote = (content) => {
        dispatch({
            type : ADD_NOTE,
            payload: content 
        });
    }

    const deleteNote = (id) => {
        dispatch({type: DELETE_NOTE , payload: id});
    }

    const updateNote  = (id, content) => {
        dispatch({type: UPDATE_NOTE , payload: {id, content}})
    }

    return (
        <NotesContext.Provider value={{notes, addNote , deleteNote , updateNote}}>
               {children}
        </NotesContext.Provider>
    )
}

