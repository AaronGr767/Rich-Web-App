--Problem 1 : Explain using code examples what is meant by props and state in React JS?

In terms of React, props represent the data being passed into a React component. They function in a similiar manner to HTML attributes or JS function arguments. They fit into the category of pure functions which means you cannot change a component modifying its own props, however it is possible to modify the state of the component.

Prop Example:

function User(props) {
  return <h2>Hello, { props.name }!</h2>;
}

const myexample = <User name="Aaron" />;

ReactDOM.render(myexample, document.getElementById('root'));

Whereas state refers to a buil-in react object that contains data/info about a specific component. A component’s state can change over time and whenever it changes, the component re-renders.
State Example:

stateExample(){
    this.setState({name:"Aaron"})
    return(this.state.name) //This would return Aaron
}

--Problem 2 : In functional programming, what does the term functor mean? Can you give an example in JavaScript?

A functor

--Problem 3 : We have looked at three kinds of asynchronous programming mechanisms,namely callbacks, promises and streams. Mention one advantage and one disadvantage of each type.

Callbacks:
Promises:
Streams:

--Problem 4 : With the aid of a diagram and example code, describe the Cascading Style Sheets (CSS) Box Model and show how it can be used to space DOM elements.

--Problem 5 : Detail how the browser loads and bootstraps a rich web application from an initial URL.