import NotesList from "./components/NotesList";
import {useState} from 'react';
import {nanoid} from 'nanoid';
import AddNote from "./components/AddNote";

const App = () => {
  const [notes, setNotes] = useState([])

  const[visible,setisvisible] = useState(false);

  const createNote = event => {
    console.log("Create note")
    setisvisible(!visible);
  }
  
  const addNote = (name, description) => {
    console.log("adding note!")
    console.log(name + " - " + description)
    
    const newNote = {
      id:nanoid(),
      name: name,
      description: description
    }

    const newNotes = [...notes, newNote];
    console.log("Note array - " + newNotes.id + newNotes.name + newNote.description)
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  return (
    <>
    <div>
    <div class="Wrapper">
        <h1>Problem 1 - Note Taking App in React JS</h1>
        
            <button id="create-note-button">Click here to create a note!</button>
    </div>
    </div>
    {!visible && <AddNote setisvisble={createNote} handleAddNote={addNote}/>}
        

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
