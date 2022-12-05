--Problem 1 : Explain using code examples what is meant by props and state in React JS?

In terms of React, props represent the data being passed into a React component. They function in a similiar manner to HTML attributes or JS function arguments. They fit into the category of pure functions which means you cannot change a component modifying its own props, however it is possible to modify the state of the component.

Prop Example:

`function User(props) {`
`  return <h2>Hello, { props.name }!</h2>;`
`}`

`const myexample = <User name="Aaron" />;`

`ReactDOM.render(myexample, document.getElementById('root'));`

Whereas state refers to a buil-in react object that contains data/info about a specific component. A component’s state can change over time and whenever it changes, the component re-renders.

State Example:

`stateExample(){`
`    this.setState({name:"Aaron"})`
`    return(this.state.name) //This would return Aaron`
`}`

--Problem 2 : In functional programming, what does the term functor mean? Can you give an example in JavaScript?

A functor is a data structure that can support a mapping operation and takes one or more other modules as a parameter. Functors are created by using the map() function which will generate another object instance of the same type and connections.

Functor Example:

`[1, 2, 3].map(val => val * 2); //generates [2, 4, 6]`

--Problem 3 : We have looked at three kinds of asynchronous programming mechanisms,namely callbacks, promises and streams. Mention one advantage and one disadvantage of each type.

--Callbacks
Advantage: Ideal for use if a request needs to be made which will take a long time (e.g. reading data from a network) as the the callback function is stored for subsequent execution the moment the request is made while the program can still proceed in the meantime. 
Disadvantage: If there is to be 2 asynchronous requests and the 2nd is to made after completion of the 1st then the 2nd request must be made with the 1st requests callback logic. This leads to nested callbacks which are difficult to debug and handle error cases.

--Promises
Advantage: Unlike callbacks, promises are composable which allows them to avoid the issue that nested callbacks face.
Disadvantage: They are unable to hold data sources that provid more than 1 value such as mouse movement.

-Streams
Advantage: Very memory efficient, removes the need to load a large amount of data in memory before processing the data.
Disadvantage:

--Problem 4 : With the aid of a diagram and example code, describe the Cascading Style Sheets (CSS) Box Model and show how it can be used to space DOM elements.

image.png

--Problem 5 : Detail how the browser loads and bootstraps a rich web application from an initial URL.