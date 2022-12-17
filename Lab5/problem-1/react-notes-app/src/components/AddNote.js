import { useState } from "react";

const AddNote = ({setisvisible, handleAddNote}) =>{

    const [noteName, setNoteName] = useState("");
    const [noteDesc, setNoteDesc] = useState("");
    const [noteColour, setNoteColour] = useState("palevioletred");
    
    const[check1,setCheck1] = useState(false);
    const[check2,setCheck2] = useState(false);

    // let check1 = false;
    // let check2 = false;

    console.log("fuck it" + check1)
    

    const handleNameChange = (event) => {
        setCheck1(true)
        console.log("fuck it" + check1)
        setNoteName(event.target.value)
        console.log("Tester1 - " + noteName)
    }

    const handleDescChange = (event) => {
        setCheck2(true)
        setNoteDesc(event.target.value)
        console.log("Tester2 - " + noteDesc)
    }

    const handleColourChange = (event) => {
        setNoteColour(event.target.value)
        console.log("Tester3 - " + noteColour)
    } 

    const handleSaveNote = () => {
        console.log(check1 + check2)
        if(check1 === true && check2 === true){
            console.log("Saved note success");
            setisvisible(false);
            handleAddNote(noteName, noteDesc, noteColour)
        }else {
            console.log(check1 + check2)
            alert("Please fill in all fields first!")
        }
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