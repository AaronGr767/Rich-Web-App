import { useState } from "react";

const AddNote = ({setisvisible, handleAddNote}) =>{

    const [noteName, setNoteName] = useState("");
    const [noteDesc, setNoteDesc] = useState("");
    const [noteColour, setNoteColour] = useState("palevioletred");
    

    const handleNameChange = (event) => {
        setNoteName(event.target.value)
        console.log("Tester1 - " + noteName)
    }

    const handleDescChange = (event) => {
        
        setNoteDesc(event.target.value)
        console.log("Tester2 - " + noteDesc)
    }

    const handleColourChange = (event) => {
        setNoteColour(event.target.value)
        console.log("Tester3 - " + noteColour)
    } 

    const handleSaveNote = () => {
        console.log("Saved note success");
        setisvisible(false);
        handleAddNote(noteName, noteDesc, noteColour)
  
    }

    return(
        <div className="note new">
        <div id="NoteCreationPopUp">
                <div id="NoteCreationContent">
                    <form>
                    <label htmlFor="name">Note Name:</label>
                    <input name="name" id="name" value={noteName} onChange={handleNameChange} type="text" placeholder="Name your note!" required></input>
                    <label htmlFor="content">Note Content:</label>
                    <textarea name="content" id="content" value={noteDesc} onChange={handleDescChange} rows="10" placeholder="Your notes go here!" required></textarea>
                    <label htmlFor="colours">Note Colours:</label>
                    <select name="colours" id="colours" value={noteColour} onChange={handleColourChange}>
                        <option value="palevioletred">Red</option>
                        <option value="palegreen">Green</option>
                        <option value="paleturquoise">Blue</option>
                    </select>
                </form>
                    <div id="SaveNote">
                        <button id="add-note-button" onClick={handleSaveNote}>Save Note</button>
                    </div>
                </div>   
            </div>     
    </div>
    )
}

export default AddNote;