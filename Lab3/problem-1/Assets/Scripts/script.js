let add_btn = document.getElementById('add-button');

add_btn.addEventListener('click', () => {
    let fName = document.getElementById('formName');
    let fNumber = document.getElementById('formNumber');
    let fEmail = document.getElementById('formEmail');

    var nameVal = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if(fName.value.length == 0 || fNumber.value.length == 0 || fEmail.value.length == 0){
        let errorHTML = document.getElementById('errorPlaceholder');
        errorHTML.style.display = 'block';
        errorHTML.style.visibility = 'visible';
        } else if (fName.length > 20) {
            alert("Name must be 20 characters or less!");
            return false;
            } else if(!fName.match(nameVal)) {
                alert("Name cannot contain special characters or numbers!!");
                return false;
            }  
     });