import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotesProvider } from './utils/NotesContext';
import NoteForm from './components/notesform/NoteForm';
import NoteList from './components/noteslists/NoteList';
import NoteDetails from './components/notesdetails/NoteDetails';

function App() {
  return (
     <NotesProvider>
        {/* routes */}
        <Router>
          <Routes>
          <Route path="/" element={
             <>
               <NoteForm /> 
               <NoteList />
             </>

           } />
           <Route path="/note/:id"  element={<NoteDetails />} />
          </Routes>
        </Router>
     </NotesProvider>
  );
}

export default App;
