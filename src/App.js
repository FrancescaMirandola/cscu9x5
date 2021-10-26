import './App.css';
import MainStyles from "./Components/MainStyles";
import algoTwo from "./Components/AlgorithmTwo/algoTwo.js";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/algorithmOne">
                    <div>
                        <MainStyles/>
                    </div>
                </Route>

                <Route exact path="/algorithmTwo" >
                    <algoTwo/>
                </Route>

                <Route exact path="/algorithmThree">

                </Route>
            </Switch>
        </Router>
    );
}

export default App;
