import Home from '../components/pages/home/home'
import About from "../components/pages/about/about";
import Contact from "../components/pages/contact/contact";
import RestaurantAbout from "../components/pages/restaurantAbout/restaurantAbout";
import Restaurants from "../components/pages/restaurants/restaurants";
import Admin from "../components/admin/admin";
import AdminPage from "../components/pages/adminPages/adminPage";
import AdminRestaurants from "../components/pages/adminRestaurants/adminRestaurants";
import Orders from "../components/pages/adminOrders/orders";
import {
  ABOUT,
  ADMIN,
  ADMIN_ORDERS,
  ADMIN_PAGE,
  ADMIN_RESTAURANTS,
  CONTACT_URL,
  RESTAURANTS,
  RESTAURANTS_SEARCH_BY_ID,
  RESTAURANTS_PAGE_ID,
  ADMIN_RESTAURANTS_PAGE_ID,
} from "../constant/urls";

export const Routes = [
  {
    path: "/",
    component: Home,
    options: {
      exact: true,
    },
  },

  {
    path: RESTAURANTS,
    component: Restaurants,
    options: {
      exact: true,
    },
  },

  {
    path: ABOUT,
    component: About,
  },

  {
    path: CONTACT_URL,
    component: Contact,
  },

  {
    path: RESTAURANTS_SEARCH_BY_ID,
    component: RestaurantAbout,
  },

  {
    path: RESTAURANTS_PAGE_ID,
    component: Restaurants,
  },

  {
    path: ADMIN,
    component: Admin,
    options: {
      exact: true,
    },
  },

  {
    path: ADMIN_PAGE,
    component: AdminPage,
    options: {
      exact: true,
    },
  },

  {
    path: ADMIN_RESTAURANTS,
    component: AdminRestaurants,
  },

  {
    path: ADMIN_RESTAURANTS_PAGE_ID,
    component: AdminRestaurants,
  },

  {
    path: ADMIN_RESTAURANTS_PAGE_ID,
    component: AdminRestaurants,
  },

  {
    path: ADMIN_ORDERS,
    component: Orders,
  },
];

export default Routes;
