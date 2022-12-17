import NotesList from "./components/NotesList";
import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import AddNote from "./components/AddNote";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes-store'));
    return storedNotes || []; 

  });

  const[visible,setisvisible] = useState(false);

  

  const createNote = () => {
    console.log("Create note")
    setisvisible(!visible);
  }
  
  const addNote = (name, description, colour) => {
    console.log("adding note!")
    console.log(name + " - " + description)
    
    const newNote = {
      id:nanoid(),
      name: name,
      description: description,
      colour: colour
    }

    const newNotes = [...notes, newNote];
    console.log("Note array - " + newNote.id + newNote.name + newNote.description + newNote.colour)
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  useEffect(() => {

    localStorage.setItem('notes-store', JSON.stringify(notes));
  }, [notes]);

  return (
    <>
    <div>
    <div className="Wrapper">
        <h1>Problem 1 - Note Taking App in React JS</h1>
        
            <button id="create-note-button" onClick={createNote}>Click here to create a note!</button>
    </div>
    </div>
    {visible && <AddNote setisvisble={createNote} handleAddNote={addNote}/>}
        

    <div className="container">
      <NotesList notes={notes} handleDeleteNote={deleteNote}/>
    </div>
    </>
  );
};

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
