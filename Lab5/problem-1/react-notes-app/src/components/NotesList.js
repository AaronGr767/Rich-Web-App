import Note from './Note'

const NotesList = ({notes, handleDeleteNote, handleEditNote}) => {
    return(
        <div className="notes-list">
            {notes.map((note)=> (<Note id={note.id} name={note.name} desc={note.desc} handleDeleteNote={handleDeleteNote} handleEditNote ={handleEditNote}/>))}
        </div>
    )
}

export default NotesList;