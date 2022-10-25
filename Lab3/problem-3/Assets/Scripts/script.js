let search_btn = document.getElementById('search-button');


//When user attempts to add contact, enter this function
search_btn.addEventListener('click', () => {
    let searchName = document.getElementById('searchInput');

    if (searchName.value.length == 0) {
        alert('You must enter a username first!');
    }

    showUserInfoSearch(searchName);
    showUserRepoSearch(searchName)

});

function showUserInfoSearch(searchName) {

    let userRequest = fetch(`https://api.github.com/users/${searchName.value}`);

    let prPicture = document.getElementById('profilePicture');
    let prName = document.getElementById('profileName');
    let prUsername = document.getElementById('profileUsername');
    let prEmail = document.getElementById('profileEmail');
    let prLocation = document.getElementById('profileLocation');
    let prGists = document.getElementById('profileGists');

    userRequest.then(response => response.json())
        .then(userInfo => {

            console.log(userInfo);

            let noInfo = 'No info found.'

            if (userInfo.name == null) {
                userInfo.name = noInfo;
            }

            if (userInfo.email == null) {
                userInfo.email = noInfo;
            }

            if (userInfo.lcoation == null) {
                userInfo.location = noInfo;
            }

            prPicture.src = userInfo.avatar_url;
            prName.innerHTML = userInfo.name;
            prUsername.innerHTML = userInfo.login;
            prEmail.innerHTML = userInfo.email;
            prLocation.innerHTML = userInfo.location;
            prGists.innerHTML = userInfo.public_gists
        })

}

function showUserRepoSearch(searchName) {
    let repoRequest = fetch(`https://api.github.com/users/${searchName.value}/repos`);

    repoRequest.then(response => response.json())
        .then(repoInfo => {

            console.log(repoInfo);


            let html = "";

            for (let i = 0; i < repoInfo.length; i++) {
                html += `<div class="repoInfo">
            <h5>${repoInfo[i].name}</h5>
            <p>${repoInfo[i].description}</p>
            </div>`;
                let repoHTML = document.getElementById("reposListContainer");
                repoHTML.innerHTML = html;
            }

            if (repoInfo.length > 5) {
                let rlCont = document.getElementById('reposListContainer');
                rlCont.style.overflow = "auto";
                rlCont.style.borderBottom = "1px solid black"

            } else {
                let rlCont = document.getElementById('reposListContainer');
                rlCont.style.border = "0px"
            }
        })


}