import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../../components/home/Home";
import About from "../../components/pages/about/About";
import Contact from "../../components/pages/contact/Contact";
import Restaurants from "../../components/pages/restaurants/Restaurants";
import RestaurantAbout from "../../components/pages/restaurantAbout/restaurantAbout";
import Admin from "../../components/admin/admin";
import AdminPage from "../../components/pages/adminPages/adminPage";
import AdminRestaurants from "../../components/pages/adminRestaurants/adminRestaurants";
import Orders from "../../components/pages/adminOrders/orders";
import Routes from "../../helpers/routes";
import '../../App.css'

const MainLayout = () => {

    return (
// TODO change to config++
        <>
            <Switch>
                {/*<Route exact path="/">*/}
                {/*    <Home/>*/}
                {/*</Route>*/}
                {/*<Route exact path="/restaurants">*/}
                {/*    <Restaurants/>*/}
                {/*</Route>*/}
                {/*<Route exact path="/about">*/}
                {/*    <About/>*/}
                {/*</Route>*/}
                {/*<Route exact path="/contact">*/}
                {/*    <Contact/>*/}
                {/*</Route>*/}
                {/*<Route path="/restaurants/search/:id" component={RestaurantAbout}/> // TODO change to id++ */}
                {/*<Route path="/restaurants/page/:id" component={Restaurants}/>*/}

                {Routes.map(({ path, options = {}, component: Component }) => {
                    console.log(path, options, Component)
                    return  (
                        <Route
                            path={path}
                            component={Component}
                            {...options}
                        />
                    )
                })}

                {/*<Route exact path='/admin'>*/}
                {/*    <Admin/>*/}
                {/*</Route>*/}
                {/*<Route exact path='/admin/page' component={AdminPage}/>*/}
                {/*<Route exact path={'/admin/restaurants'} component={AdminRestaurants}/>*/}
                {/*<Route exact path={'/admin/restaurants/page/:id'} component={AdminRestaurants}/>*/}
                {/*<Route exact path={'/admin/orders'} component={Orders}/>*/}
                {/*<Redirect to="/"/>*/}
                <Route path="*">
                    <div className='box-not-found'>
                        <h1>Not Found</h1>
                        <p>404 ERROR</p>
                    </div>

                </Route>
            </Switch>
        </>

    )
}

export default MainLayout