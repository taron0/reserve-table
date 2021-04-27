import Home from "../components/home/Home";
import About from "../components/pages/about/About";
import Contact from "../components/pages/contact/Contact";
import Child from "../components/router/childer/child";
import RestaurantAbout from "../components/pages/restaurantAbout/restaurantAbout";
import Restaurants from "../components/pages/restaurants/Restaurants";

export const  Routes = [
    {
        path:'/',
        component:Home,
    },

    {
        path:'/restaurants',
        component:Restaurants,
    },

    {
        path:'/about',
        component:About,
    },

    {
        path:'/contact',
        component:Contact,
    },

    {
        path:'resturants/search/:id',
        component:RestaurantAbout,
    },

    {
        path:'resturants/:id',
        component:Child,
    }

]
