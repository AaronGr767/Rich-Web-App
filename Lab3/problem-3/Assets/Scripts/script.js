let search_btn = document.getElementById('search-button');

//When user attempts to add contact, enter this function
search_btn.addEventListener('click', () => {
    let searchName = document.getElementById('searchInput');

    if(searchName.value.length == 0){
        alert('You must enter a username first!');
    }
     
    let prPicture = document.getElementById('profilePicture');
    let prName = document.getElementById('profileName');
    let prUsername = document.getElementById('profileUsername');
    let prEmail = document.getElementById('profileEmail');
    let prLocation = document.getElementById('profileLocation');
    let prGists = document.getElementById('profileGists');

    let userRequest = fetch(`https://api.github.com/users/${searchName.value}`);

    userRequest.then(response => response.json())
    .then(userInfo => {

        console.log(userInfo);

        prPicture.src = userInfo.avatar_url;
        prName.innerHTML = userInfo.name;
        prUsername.innerHTML = userInfo.login;
        prEmail.innerHTML = userInfo.email;
        prLocation.innerHTML = userInfo.location;
        prGists.innerHTML = userInfo.public_gists
    })


});

function showUserSearch(){
    let

}