
const Note = ({id, name, description, colour, handleEditNote, handleDeleteNote}) => {
    return(<div className="note">
        <div className="DisplayedNote" style={{backgroundColor: colour}}>
            <div className="DisplayedNoteContent">
                <p className="NameText">{name}</p>
                <p className="ContentText">{description}</p>
            </div>
            <button onClick={() => handleEditNote(id)} className="edit-note-button">Edit Note</button>
		    <button onClick={() => handleDeleteNote(id)} className="delete-note-button">Delete Note</button>
	    </div>
    </div>
    );
};


export default Note;