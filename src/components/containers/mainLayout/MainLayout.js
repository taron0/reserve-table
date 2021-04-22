import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "../../home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";

const MainLayout = () => {
    return (

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                {/*<Route exact path="/resturants">*/}
                {/*    <Resturants />*/}
                {/*</Route>*/}
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>

    )
}

export default MainLayout