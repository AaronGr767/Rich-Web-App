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
        html += `<tr>
                    <td>${element.formName}</td>
                    <td>${element.formNumber}</td>
                    <td>${element.formEmail}</td>
                </tr>`;
    });
    
    let contactHTML = document.getElementById("contactsInfo");
    contactHTML.innerHTML = html;
};

function sortAlpha(){
        var contacts, rows, switching, i, comp1, comp2, switched;
        contacts = document.getElementById("contactsTable");
        switching = true;

        while (switching) {
          switching = false;
          rows = contacts.rows;

          for (i = 1; i < (rows.length - 1); i++) {
            switched = false;
            comp1 = rows[i].getElementsByTagName("TD")[0];
            comp2 = rows[i + 1].getElementsByTagName("TD")[0];

            if (comp1.innerHTML.toLowerCase() > comp2.innerHTML.toLowerCase()) {
              switched = true;
              break;
            }
          }
          if (switched) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
}

function searchNumber(){
    var searchCount = 0;

    var searchValue = document.getElementById("search-bar");
    var conTable = document.getElementById("contactsTable");
    var ctRows = conTable.getElementsByTagName("tr");
  
    for (i = 0; i < ctRows.length; i++) {
        tData = ctRows[i].getElementsByTagName("td")[1];
      if (tData) {
        numValue = tData.textContent || tData.innerText;
        if (numValue.indexOf(searchValue.value) > -1) {
            ctRows[i].style.display = "";
            searchCount ++;
        } else {
            ctRows[i].style.display = "none";
        }
      }
    }

    let noRes = document.getElementById('noResult');

    if(searchCount == 0){
        noRes.style.display = 'block';
        noRes.style.visibility = 'visible';
    } else{
        noRes.style.display = 'none';
        noRes.style.visibility = 'hidden';
    }
}