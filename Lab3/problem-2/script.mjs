import fetch from "node-fetch";
let counter = 0;

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(posts => {
    console.log(posts.filter(posts => countPostTitle(posts.title)))
    console.log(posts.map(posts => bodyMap(posts.body)))
  })

  function countPostTitle(title){
    const arr = title.split(' ');

    return arr.filter(word => word !== '').length > 6;
  }

  function bodyMap(body){
    const arr = body.split(' ');
    var bodyArray= [];
    counter++;

    bodyArray[counter] = arr.filter(word => word !== '').length 

    return bodyArray;
  }