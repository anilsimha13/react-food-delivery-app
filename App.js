import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "div",
  { id: "parent", attribute: "value" },
  [React.createElement('h1',{},"Hello World!🌏 🧠"), React.createElement('h5',{},'Creating the sibiling elements using Square Brackets🥹[ ]')]
);
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
