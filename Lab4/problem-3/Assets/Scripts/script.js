const { fromEvent } = rxjs;

let formVisibilty = document.getElementById('NoteCreationPopUp');
formVisibilty.style.display = 'none';

let parentId = null;
let childNote= false;

document.querySelector("form").reset();

showNotes();

let create_btn = document.getElementById('create-note-button');
let add_btn = document.getElementById('add-note-button');

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
            parent: parentId,
            noteName: name.value,
            noteContent: content.value,
            noteColours: colours.value}
    
    noteIndex.push(createdNote);
    localStorage.setItem('notesStore', JSON.stringify(noteIndex));
    
    document.querySelector("form").reset();

    let formVisibilty = document.getElementById('NoteCreationPopUp');
    formVisibilty.style.display = 'none';

    parentId=null;

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
                    <button id="${index}"onclick="editNote(this.id)" class="edit-note-button">Edit Note</button>
                    <button id="${index}"onclick="createChildNoteCheck(this.id)" class="child-note-button">Create Child Note</button>
		            <button id="${index}"onclick="deleteNote(this.id)" class="delete-note-button">Delete Note</button>
	            </div>`;
    });
    
    let noteHTML = document.getElementById("DisplayedNotesArea");
    noteHTML.innerHTML = html;
}


function createChildNoteCheck(parent){
    let formVisibilty = document.getElementById('NoteCreationPopUp');

    parentId = parent;

    if (formVisibilty.style.display == 'none') {
        formVisibilty.style.display = 'block';
    } else {
        formVisibilty.style.display = 'none';
    }
    childNote = true;
}

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
  

function createChildNote(parent) {
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
        parent: parent,
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
};