import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Months from "./components/Months";

function App() {
  return (
    <Router>
      <div className="App">
        <header>Months App</header>

        <Months />
      </div>
    </Router>
  );
}

export default App;
