import React from "react";
import {Route, Switch, useHistory } from "react-router-dom";
import Home from "../../home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Restaurants from "../../pages/restaurants/Restaurants";
import Child from "../../router/childer/child";


const MainLayout = () => {


    return (

        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/restaurants">
                <Restaurants/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/contact">
                <Contact/>
            </Route>
                <Route path="/resturants/:id" children={<Child />} />


        </Switch>

    )
}

export default MainLayout