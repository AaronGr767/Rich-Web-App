import Note from './Note'

const NotesList = ({notes}) => {
    return(
        <div className="notes-list">
            {notes.map((note)=> (<Note id={note.id} name={note.name} desc={note.desc}/>))}
        </div>
    )
}

export default NotesList;