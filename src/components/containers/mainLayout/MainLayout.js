import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const MainLayout = () => {
    return (

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/resturants">
                    <Resturants />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
            </Switch>

    )
}