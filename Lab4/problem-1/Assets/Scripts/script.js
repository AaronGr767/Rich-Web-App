const { fromEvent } = rxjs;

const create_btn = document.getElementById('create-note-button');
const add_btn = document.getElementById('add-note-button');
// const edit_btn = document.getElementsByClassName('edit-note-button');



let formVisibilty = document.getElementById('NoteCreationPopUp');
formVisibilty.style.display = 'none';

document.querySelector("form").reset();

showNotes();

fromEvent(create_btn, 'click').subscribe(() => {
    let formVisibilty = document.getElementById('NoteCreationPopUp');

    if (formVisibilty.style.display == 'none') {
        formVisibilty.style.display = 'block';
    } else {
        formVisibilty.style.display = 'none';
    }

});


fromEvent(add_btn, 'click').subscribe(() => {
    let name = document.getElementById('name');
    let content = document.getElementById('content');
    let colours = document.getElementById('colours');

    if (name.value == "" || content.value == "") {
        return alert("Please fill in all required info!");
      } 

    if (localStorage.getItem("notesStore") == null) {
        noteIndex = [];
    }else{
        noteIndex = JSON.parse(localStorage.getItem('notesStore'));
    }
    

    let createdNote = {
        noteName: name.value,
        noteContent: content.value,
        noteColours: colours.value
    }
    
    noteIndex.push(createdNote);
    localStorage.setItem('notesStore', JSON.stringify(noteIndex));
    
    document.querySelector("form").reset();

    let formVisibilty = document.getElementById('NoteCreationPopUp');
    formVisibilty.style.display = 'none';

    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notesStore");

    if (notes == null) {
        noteIndex = [];
      } else {
        noteIndex = JSON.parse(notes);
    }

    let html = "";
    
    noteIndex.forEach(function(element, index) {
        html += ` <div class="DisplayedNote" style="background-color: ${element.noteColours}">
                    <div class="DisplayedNoteContent">
                        <p class="NameText">${element.noteName}</p>
                        <p class="ContentText">${element.noteContent}</p>
                    </div>
                    <button id="${index}" onclick="editNote(this.id)" class="edit-note-button">Edit Note</button>
		            <button id="${index}" onclick="deleteNote(this.id)" class="delete-note-button">Delete Note</button>
	            </div>`;


                // const edit_btn = document.getElementById(index);
                // fromEvent(edit_btn, 'click').subscribe(() => editNote(index));
                       
    });

    // fromEvent(edit_btn, 'click').subscribe(() => {editNote(this.id)});
    let noteHTML = document.getElementById("DisplayedNotesArea");
    noteHTML.innerHTML = html;
};

//  fromEvent(edit_btn, 'click').subscribe(() => editNote(id));


function editNote(index) {
    let formVisibilty = document.getElementById('NoteCreationPopUp');
    formVisibilty.style.display = 'block';

    let name = document.getElementById('name');
    let content = document.getElementById('content');
    let colours = document.getElementById('colours');

    if (localStorage.getItem("notesStore") == null) {
        noteIndex = [];
    }else{
        noteIndex = JSON.parse(localStorage.getItem('notesStore'));
    }
  
    name.value = noteIndex[index].noteName;
    content.value = noteIndex[index].noteContent;
    colours.value = noteIndex[index].noteColours;

    noteIndex.splice(index, 1);
    localStorage.setItem("notesStore", JSON.stringify(noteIndex));
    showNotes();
}

function deleteNote(index) {
    if (localStorage.getItem("notesStore") == null) {
        noteIndex = [];
    }else{
        noteIndex = JSON.parse(localStorage.getItem('notesStore'));
    }
      
    noteIndex.splice(index, 1);
    localStorage.setItem("notesStore", JSON.stringify(noteIndex));
    showNotes();
}
  
