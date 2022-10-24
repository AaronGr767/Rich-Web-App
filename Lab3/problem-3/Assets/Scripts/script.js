let search_btn = document.getElementById('search-button');

//When user attempts to add contact, enter this function
search_btn.addEventListener('click', () => {
    let searchName = document.getElementById('searchInput');

    if(searchName.value.length == 0){
        alert('You must enter a username first!');
    }

    let userRequest = fetch(`https://api.github.com/users/${searchName.value}`);

    userRequest.then(response => console.log(response.json()));
});