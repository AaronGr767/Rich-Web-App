let add_btn = document.getElementById('add-button');
let alreadyClicked = false;
showContacts();

document.getElementById('formName').value = "";
document.getElementById('formNumber').value = "";
document.getElementById('formEmail').value = "";

//When user attempts to add contact, enter this function
add_btn.addEventListener('click', () => {
    let fName = document.getElementById('formName');
    let fNumber = document.getElementById('formNumber');
    let fEmail = document.getElementById('formEmail');

    var nameTest = /^(?!.{21})[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    var phoneTest = /^\d{10}$/;
    var emailTest = /^(?!.{40})[a-z0-9]+(?:\.[a-z0-9]+)*@[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-zA-Z]{2,6}$/;

    if (!fName.value.match(nameTest)) { //Validates name by comparing with suitable regex

        showErrorMessage();

        html = `<div id="errorMessage">
                        <p>Name must be 20 characters or less and cannot contain special characters or numbers!</p>
                        <button id="error-ok-button" onclick="hideErrorMessage()">OK</button>
                    </div>`;
        document.getElementById('errorPlaceholder').innerHTML = html;

    } else if (!fNumber.value.match(phoneTest)) { //Validates mobile number by comparing with suitable regex

        showErrorMessage();

        html = `<div id="errorMessage">
                            <p>Mobile number must only contain numbers and be 10 numbers long!</p>
                            <button id="error-ok-button" onclick="hideErrorMessage()">OK</button>
                        </div>`;
        document.getElementById('errorPlaceholder').innerHTML = html;

    } else if (!fEmail.value.match(emailTest)) { //Validates email by comparing with suitable regex

        showErrorMessage();

        html = `<div id="errorMessage">
                            <p>Must be a valid email that is less than 40 characters long!</p>
                            <button id="error-ok-button" onclick="hideErrorMessage()">OK</button>
                        </div>`;
        document.getElementById('errorPlaceholder').innerHTML = html;
    } else {
        addContact(); //If validation passed then procedd to function to add contact
    }

});

//Hides pop up error message for contact info validation
function hideErrorMessage() {
    let errorHTML = document.getElementById('errorPlaceholder');
    errorHTML.style.display = 'none';
    errorHTML.style.visibility = 'hidden';
};

//Shows pop up error message for contact info validation
function showErrorMessage() {
    let errorHTML = document.getElementById('errorPlaceholder');
    errorHTML.style.display = 'block';
    errorHTML.style.visibility = 'visible';

    return errorHTML;
};

//Adds contact info to local storage
function addContact() {
    let fName = document.getElementById('formName');
    let fNumber = document.getElementById('formNumber');
    let fEmail = document.getElementById('formEmail');

    let contacts = localStorage.getItem("contactStore");


    if (contacts == null) {//checks to see if local storage is empty
        contactsIndex = [];
    } else {
        contactsIndex = JSON.parse(contacts);
    }


    let savedContact = {
        formName: fName.value,
        formNumber: fNumber.value,
        formEmail: fEmail.value
    }

    contactsIndex.push(savedContact);
    localStorage.setItem('contactStore', JSON.stringify(contactsIndex));

    showContacts();//Refreshes show contacts so new addition is displayed
}

//Displays all added contacts present in local storage
function showContacts() {
    let contacts = localStorage.getItem("contactStore");

    if (contacts == null) {//checks to see if local storage is empty
        contactsIndex = [];
    } else {
        contactsIndex = JSON.parse(contacts);
    }

    let html = "";

    contactsIndex.forEach(function (element, index) { //Cycles through each entry and displays it in table
        html += `<tr>
                    <td>${element.formName}</td>
                    <td>${element.formNumber}</td>
                    <td>${element.formEmail}</td>
                </tr>`;
    });

    let contactHTML = document.getElementById("contactsInfo");
    contactHTML.innerHTML = html;
};

//Sorts table by name alphabetically (ascending & descending)
function sortAlpha() {
    var contacts, rows, switching, i, comp1, comp2, switched;
    contacts = document.getElementById("contactsTable");
    switching = true;
    while (switching) { //Loops until no more switching to be done
        switching = false;
        rows = contacts.rows;

        for (i = 1; i < (rows.length - 1); i++) { //Iterates through each row for comparison
            switched = false;
            comp1 = rows[i].getElementsByTagName("TD")[0];
            comp2 = rows[i + 1].getElementsByTagName("TD")[0];

            if (alreadyClicked == false) { //Checks to order in descending order
                if (comp1.innerHTML.toLowerCase() > comp2.innerHTML.toLowerCase()) {
                    switched = true;
                    break;
                }
            } else if (alreadyClicked == true) { //Checks to order in ascending order
                if (comp1.innerHTML.toLowerCase() < comp2.innerHTML.toLowerCase()) {
                    switched = true;
                    break;
                }
            }
        }
        if (switched) { //If switch needs to be made, make switch
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        } else { //If no switch needs to be made then toggle the check for descending/ascending order
            alreadyClicked = !alreadyClicked;
        }
    }
}

//Searches table based on mobile number input
function searchNumber() {
    var searchCount = 0;

    var searchValue = document.getElementById("search-bar");
    var conTable = document.getElementById("contactsTable");
    var ctRows = conTable.getElementsByTagName("tr");

    for (i = 0; i < ctRows.length; i++) { //Iterates through each row
        tData = ctRows[i].getElementsByTagName("td")[1];
        if (tData) { //If there is any data in the cell
            numValue = tData.textContent || tData.innerText;
            if (numValue.indexOf(searchValue.value) > -1) { //If search input is present in the row then dont hide it
                ctRows[i].style.display = "";
                searchCount++;
            } else { //If not present in the row then hide the row
                ctRows[i].style.display = "none";
            }
        }
    }

    let noRes = document.getElementById('noResult');

    if (searchCount == 0) { //If no match found then display appropriate message
        noRes.style.display = 'block';
        noRes.style.visibility = 'visible';
    } else { //Otherwise hide the message
        noRes.style.display = 'none';
        noRes.style.visibility = 'hidden';
    }
}