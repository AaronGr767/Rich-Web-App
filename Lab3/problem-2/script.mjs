import fetch from "node-fetch";

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(posts => console.log(posts.filter(posts => countPostTitle(posts.title))))

  // console.log(posts);

  function countPostTitle(title){
    const arr = title.split(' ');

    return arr.filter(word => word !== '').length > 6;
  }