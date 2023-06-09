import "./index.scss";

import "./assets/*.tsx";

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import imageSrc from "./assets/image.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>header 1</h1>
      <p>paragraph</p>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <img src={imageSrc} width={150} height={150} />
    </div>
  );
}

const rootNode = document.getElementById("root");

if (rootNode) {
  ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
