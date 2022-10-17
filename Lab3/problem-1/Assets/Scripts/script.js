function validateForm() {
    let fName = document.forms["contactInfoForm"]["formName"].value;
    var nameVal = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (fName.length > 20) {
        alert("Name must be 20 characters or less!");
        return false;
    } else if(!fName.match(nameVal)) 
    {
        alert("Name cannot contain special characters or numbers!!");
        return false;
    }  
  }