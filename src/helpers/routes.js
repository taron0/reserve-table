import Home from "../components/home/Home";
import About from "../components/pages/about/About";
import Contact from "../components/pages/contact/Contact";
import RestaurantAbout from "../components/pages/restaurantAbout/restaurantAbout";
import Restaurants from "../components/pages/restaurants/Restaurants";
import Admin from "../components/admin/admin";
import AdminPage from "../components/pages/adminPages/adminPage";
import AdminRestaurants from "../components/pages/adminRestaurants/adminRestaurants";
import Orders from "../components/pages/adminOrders/orders";

export const  Routes = [
    {
        path:'/',
        component:Home,
        options: {
            exact: true,
        }
    },

    {
        path:'/restaurants',
        component:Restaurants,
        options: {
            exact: true,
        }
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
        path:'/restaurants/search/:id',
        component:RestaurantAbout,
    },

    {
        path:'/restaurants/page/:id',
        component:Restaurants,
    },

    {
        path: '/admin',
        component:Admin,
        options: {
            exact: true,
        }
    },

    {
        path: '/admin/page',
        component:AdminPage,
        options: {
            exact: true,
        },
    },

    {
        path: '/admin/restaurants',
        component:AdminRestaurants,
    },

    {
        path: '/admin/restaurants/page/:id',
        component:AdminRestaurants,
    },

    {
        path: '/admin/restaurants/page/:id',
        component:AdminRestaurants,
    },

    {
        path: '/admin/orders',
        component:Orders,
    },

]

export default Routes