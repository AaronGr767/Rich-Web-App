export default function AddNote(){
    const save_note = () => {
        console.log("Saved note: smileyface767");
    }

    return(
        <div className="note new">
        <div id="NoteCreationPopUp">
                <div id="NoteCreationContent">
                    <form>
                    <label for="name">Note Name:</label>
                    <input name="name" id="name" type="text" placeholder="Name your note!" required></input>
                    <label for="content">Note Content:</label>
                    <textarea name="content" id="content" rows="10" placeholder="Your notes go here!" required></textarea>
                    <label for="colours">Note Colours:</label>
                    <select name="colours" id="colours">
                        <option value="palevioletred">Red</option>
                        <option value="palegreen">Green</option>
                        <option value="paleturquoise">Blue</option>
                    </select>
                </form>
                    <div id="SaveNote">
                        <button id="add-note-button" onClick={save_note}>Save Note</button>
                    </div>
                </div>   
            </div>     
    </div>
    )
}