import NotesList from "./components/NotesList";
import {useState} from 'react';
import {nanoid} from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    name: "Example1",
    desc: "Hello There!"
  },{
    id: nanoid(),
    name: "Example2",
    desc: "Hello There Again!"
  },{
    id: nanoid(),
    name: "Example3",
    desc: "Hello There Once Again!"
  }])

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
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
