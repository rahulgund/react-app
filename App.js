// JS code for pure react 

const heading = React.createElement(
        "h1",
        {whatIsThisObject: "weCanGiveAnyAttributesToElementLikeId", id: "heading"},        // Creating Core React Element
        "Hello World from React!"
     );                                             

const root = ReactDOM.createRoot(document.getElementById("root"));          // Creating DOM Element 

console.log(heading);
console.log(typeof(heading));

root.render(heading);