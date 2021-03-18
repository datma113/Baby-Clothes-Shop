import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/css/styles.css";
import Nav from "./components/home/Nav";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
            </div>
        </Router>
    )
}

export default App;
