import fetch from "node-fetch";

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(posts => {
    console.log(posts.filter(posts => countPostTitle(posts.title)).map(posts => posts.title))
    console.log(posts.map(posts => bodyMap(posts.body)))
  })

  //Problem 1

  function countPostTitle(title){ //Displays all titles with more than 6 words
    const arr = title.split(' ');

    return arr.filter(word => word !== '').length > 6;
  }

  //Problem 2

  function bodyMap(body){ //Create frequency map for each word in the body
    let arr = body.split(/\s+/);
    const countsMap = new Map();
    
    arr.forEach(
      word => countsMap.set(word, (countsMap.get(word) ?? 0) + 1)
      );

    return countsMap;
    }

