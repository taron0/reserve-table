import React, { useEffect } from "react";
import {Route, Switch, Redirect } from "react-router-dom";
import Home from "../../components/home/Home";
import About from "../../components/pages/about/About";
import Contact from "../../components/pages/contact/Contact";
import Restaurants from "../../components/pages/restaurants/Restaurants";
import Child from "../../components/router/childer/child";
import RestaurantAbout from "../../components/pages/restaurantAbout/restaurantAbout";
import Header from "../../components/header/Header";
import {Routes} from "../../helpers/routes";
import Admin from "../../components/admin/admin";


const MainLayout = () => {

    return (
// TODO change to config
        <>
            {/*<Header />*/}
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
                <Route  path="/resturants/search/:id" component={RestaurantAbout } /> // TODO change to id
                <Route path="/resturants/:id" children={<Child />} /> // TODO change search params
                {/*{Routes.map(({ route, component: Component }) => (*/}
                {/*    <Route exact path={route}>*/}
                {/*        <Component />*/}
                {/*    </Route>*/}
                {/*))}*/}
                <Route exact path='/admin'>
                    <Admin />
                </Route>
                <Redirect to="/" />

            </Switch>
        </>

    )
}

export default MainLayout