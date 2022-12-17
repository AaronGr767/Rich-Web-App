import { useState } from "react";

const AddNote = ({handleAddNote}) =>{

    const [noteName, setNoteName] = useState("");
    const [noteDesc, setNoteDesc] = useState("");

    const handleNameChange = (event) => {
        setNoteName(event.target.value)
        console.log("Tester1 - " + noteName)
    }

    const handleDescChange = (event) => {
        
        setNoteDesc(event.target.value)
        console.log("Tester2 - " + noteDesc)
    }

    const handleSaveNote = () => {
        console.log("Saved note success");
        handleAddNote(noteName,noteDesc)   
    }

    return(
        <div className="note new">
        <div id="NoteCreationPopUp">
                <div id="NoteCreationContent">
                    <form>
                    <label for="name">Note Name:</label>
                    <input name="name" id="name" value={noteName} onChange={handleNameChange} type="text" placeholder="Name your note!" required></input>
                    <label for="content">Note Content:</label>
                    <textarea name="content" id="content" value={noteDesc} onChange={handleDescChange} rows="10" placeholder="Your notes go here!" required></textarea>
                    <label for="colours">Note Colours:</label>
                    <select name="colours" id="colours">
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