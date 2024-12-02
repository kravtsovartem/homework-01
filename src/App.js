import logo from "./logo.svg";
import "./App.css";
import { say } from "cowsay";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(say({ text: "Hello World!" }));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
