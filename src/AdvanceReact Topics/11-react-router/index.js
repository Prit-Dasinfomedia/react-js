import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from './Person';
// mnavbar
import Navbar from './Navbar';

const ReactRouterSetup = () => {
    return (
        <>
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/people">
                            <People />
                        </Route>
                        <Route path="/person/:id" children={<Person />}>
                            
                        </Route>
                        <Route path="*">
                            <Error />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </>
    );
}
export default ReactRouterSetup;