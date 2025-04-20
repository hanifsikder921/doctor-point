import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";
import Blog from "../pages/Blogs/Blog";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:MainLayout,
      errorElement:<p>error</p>,
      children: [
        {
            path:'/',
            Component:Home
        },
        {
            path:'/booking',
            Component:Booking
        },
        {
            path:'/blog',
            Component:Blog
        },
        {
            path:'/contact',
            Component:Contact
        }
      ]
    },
  ]);