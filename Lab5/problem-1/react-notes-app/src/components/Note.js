
const Note = ({id, name, desc, handleEditNote, handleDeleteNote}) => {
    return(<div className="note">
        <div class="DisplayedNote">
            <div class="DisplayedNoteContent">
                <p class="NameText">{name}</p>
                <p class="ContentText">{desc}</p>
            </div>
            <button onclick={() => handleEditNote(id)} class="edit-note-button">Edit Note</button>
		    <button onclick={() => handleDeleteNote(id)} class="delete-note-button">Delete Note</button>
	    </div>
    </div>
    );
};


export default Note;