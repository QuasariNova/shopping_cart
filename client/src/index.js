import React from "react";
import ReactDOM from "react-dom/client";

const e = React.createElement;

const App = () => {
  return e("div", { children: [e("h1", null, "My React App")] });
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(e(App));
