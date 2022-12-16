import NotesList from "./components/NotesList";
import {useState} from 'react';
import {nanoid} from 'nanoid';
import AddNote from "./components/AddNote";

const App = () => {
  const [notes, setNotes] = useState([])

  const[visible,setisvisible] = useState(false);

  const create_note = () => {console.log("Create note")}
  
  const addNote = () => {
    console.log("adding note!")
  }

  return (
    <>
    <div>
    <div class="Wrapper">
        <h1>Problem 1 - Note Taking App in React JS</h1>
        
            <button id="create-note-button" onClick={create_note}>Click here to create a note!</button>
    </div>
    </div>

    <AddNote/>    

    <div className="container">
      <NotesList notes={notes}/>
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
