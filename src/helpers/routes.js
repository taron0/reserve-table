import Home from "../components/home/Home";
import About from "../components/pages/about/About";
import Contact from "../components/pages/contact/Contact";
import RestaurantAbout from "../components/pages/restaurantAbout/restaurantAbout";
import Restaurants from "../components/pages/restaurants/Restaurants";
import Admin from "../components/admin/admin";
import AdminPage from "../components/pages/adminPages/adminPage";
import AdminRestaurants from "../components/pages/adminRestaurants/adminRestaurants";

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
        path:'/resturants/search/:id',
        component:RestaurantAbout,
    },

    {
        path:'/restaurants/page/:id',
        component:Restaurants,
    },

    {
        path: '/admin',
        component:Admin,
    },

    {
        path: '/admin/page',
        component:AdminPage,
    },

    {
        path: '/admin/restaurants',
        component:AdminRestaurants,
    },

    {
        path: '/admin/restaurants/page/:id',
        component:AdminRestaurants,
    }

]

export default Routes