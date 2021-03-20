import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/styles.css";
import Nav from "./components/Nav";
import Footer from './components/Footer'
import routes from "./routes";

function App() {
    const renderRoutes = routes.map((route, index) => {
        return <Route path={route.to} exact component={route.component} key={index} />;
    });

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>{renderRoutes}</Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
