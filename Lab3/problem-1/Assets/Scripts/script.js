let add_btn = document.getElementById('add-button');

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
    
    if(fName.value.length == 0 || fNumber.value.length == 0 || fEmail.value.length == 0){

        showErrorMessage();

        html = `<div id="errorMessage">
                    <p>You must fill in all details first!</p>
                    <button id="error-ok-button" onclick="hideErrorMessage()">OK</button>
                </div>`;
        document.getElementById('errorPlaceholder').innerHTML = html;

        } else if (!fName.value.match(nameTest)) {

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
        noteIndex = JSON.parse(localStorage.getItem(contacts));
    }
    

    let savedContact = {
        formName: fName.value,
        formNumber: fNumber.value,
        formEmail: fEmail.value
    }
    
    contactsIndex.push(savedContact);
    localStorage.setItem('contacts', JSON.stringify(savedContact));
}