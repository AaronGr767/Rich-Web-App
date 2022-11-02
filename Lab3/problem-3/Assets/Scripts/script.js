let search_btn = document.getElementById('search-button');
let displayHTML = document.getElementById('showContent');
    displayHTML.style.display = 'none';
    displayHTML.style.visibility = 'hidden';

    document.getElementById('searchInput').value = "";

search_btn.addEventListener('click', () => { //Listens for when user clicks search button
    let searchName = document.getElementById('searchInput');

    let userRequest = fetch(`https://api.github.com/users/${searchName.value}`); //Parses user search into url

    userRequest.then(response => {console.log(response.json()) //response from fetch request
        
        if(response.ok){ //If the response code indicates success then display github profule
            showUserInfoSearch(searchName);
            showUserRepoSearch(searchName);

            let displayHTML = document.getElementById('showContent');
            displayHTML.style.display = 'block';
            displayHTML.style.visibility = 'visible';

        } else { //else keep displays hidden and alert user of unsuccessful search
            let displayHTML = document.getElementById('showContent');
            displayHTML.style.display = 'none';
            displayHTML.style.visibility = 'hidden';
            alert("You must enter a valid username!");
        }
    })
    

});

function showUserInfoSearch(searchName) { //Shows user profile info upon successful search

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

            //Checks if optional info is null or not
            if (userInfo.name == null) {
                userInfo.name = noInfo;
            }

            if (userInfo.email == null) {
                userInfo.email = noInfo;
            }

            if (userInfo.location == null) {
                userInfo.location = noInfo;
            }

            //Populates html with user info from fetch
            prPicture.src = userInfo.avatar_url;
            prName.innerHTML = userInfo.name;
            prUsername.innerHTML = userInfo.login;
            prEmail.innerHTML = userInfo.email;
            prLocation.innerHTML = userInfo.location;
            prGists.innerHTML = userInfo.public_gists
        })

}

function showUserRepoSearch(searchName) { //Shows user repo info upon successful search
    let repoRequest = fetch(`https://api.github.com/users/${searchName.value}/repos`);

    repoRequest.then(response => response.json())
        .then(repoInfo => {

            console.log(repoInfo);


            let html = "";

            for (let i = 0; i < repoInfo.length; i++) { //Iterates for each repo and populates html with repo details
                html += `<div class="repoInfo">
                        <h5>${repoInfo[i].name}</h5>
                        <p>${repoInfo[i].description}</p>
                        </div>`;
                let repoHTML = document.getElementById("reposListContainer");
                repoHTML.innerHTML = html;
            }

            if (repoInfo.length > 5) { //Makes user repo area scrollable if profile has more than 5 repos
                let rlCont = document.getElementById('reposListContainer');
                rlCont.style.overflow = "auto";
                rlCont.style.borderBottom = "1px solid black"

            } else {
                let rlCont = document.getElementById('reposListContainer');
                rlCont.style.border = "0px"
            }
        })


}