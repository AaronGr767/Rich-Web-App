let add_btn = document.getElementById('add-button');

showContacts();

document.getElementById('formName').value = "";
document.getElementById('formNumber').value = "";
document.getElementById('formEmail').value = "";

add_btn.addEventListener('click', () => {
    let fName = document.getElementById('formName');
    let fNumber = document.getElementById('formNumber');
    let fEmail = document.getElementById('formEmail');

    var nameTest = /^(?!.{21})[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    var phoneTest = /^\d{10}$/;
    var emailTest = /^(?!.{40})[a-z0-9]+(?:\.[a-z0-9]+)*@[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-zA-Z]{2,6}$/;
    
     if (!fName.value.match(nameTest)) {

            showErrorMessage();

            html = `<div id="errorMessage">
                        <p>Name must be 20 characters or less and cannot contain special characters or numbers!</p>
                        <button id="error-ok-button" onclick="hideErrorMessage()">OK</button>
                    </div>`;
            document.getElementById('errorPlaceholder').innerHTML = html;

            } else if(!fNumber.value.match(phoneTest)) {

                showErrorMessage();

                html = `<div id="errorMessage">
                            <p>Mobile number must only contain numbers and be 10 numbers long!</p>
                            <button id="error-ok-button" onclick="hideErrorMessage()">OK</button>
                        </div>`;
                document.getElementById('errorPlaceholder').innerHTML = html;
                
            }  else if(!fEmail.value.match(emailTest)) {

                showErrorMessage();

                html = `<div id="errorMessage">
                            <p>Must be a valid email that is less than 40 characters long!</p>
                            <button id="error-ok-button" onclick="hideErrorMessage()">OK</button>
                        </div>`;
                document.getElementById('errorPlaceholder').innerHTML = html;
            } else {
                addContact();
            }

});

function hideErrorMessage(){
    let errorHTML = document.getElementById('errorPlaceholder');
        errorHTML.style.display = 'none';
        errorHTML.style.visibility = 'hidden';
};

function showErrorMessage(){
    let errorHTML = document.getElementById('errorPlaceholder');
        errorHTML.style.display = 'block';
        errorHTML.style.visibility = 'visible';

        return errorHTML;
};

function addContact(){
    let fName = document.getElementById('formName');
    let fNumber = document.getElementById('formNumber');
    let fEmail = document.getElementById('formEmail');

    let contacts = localStorage.getItem("contactStore");


    if (contacts == null) {
        contactsIndex = [];
    }else{
        contactsIndex = JSON.parse(contacts);
    }
    

    let savedContact = {
        formName: fName.value,
        formNumber: fNumber.value,
        formEmail: fEmail.value
    }
    
    contactsIndex.push(savedContact);
    localStorage.setItem('contactStore', JSON.stringify(contactsIndex));

    showContacts();
}

function showContacts() {
    let contacts = localStorage.getItem("contactStore");

    if (contacts == null) {
        contactsIndex = [];
      } else {
        contactsIndex = JSON.parse(contacts);
    }

    let html = "";
    
    contactsIndex.forEach(function(element, index) {
        html += ` <div class="DisplayedNote">
                    <div class="DisplayedNoteContent">
                        <p class="NameText">${element.formName}</p>
                        <p class="ContentText">${element.formNumber}</p>
                        <p class="ContentText">${element.formEmail}</p>
                    </div>
	            </div>`;
    });
    
    let contactHTML = document.getElementById("contactPlaceholder");
    contactHTML.innerHTML = html;
}