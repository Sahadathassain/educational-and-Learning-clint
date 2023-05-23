import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddToys from "../Page/Toys/Add toys/AddToys";
import Blog from "../Blogs/Blog";
import AllToys from "../Page/Toys/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:"/Blog",
            element:<Blog></Blog>,
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        
        {
            path: '/register', 
            element: <SignUp></SignUp>
        },
        {
            path:'/addtoys',
            element:<AddToys></AddToys>,
        },
        {
            path:'/alltoys',
            element:<AllToys></AllToys>
        }
      ]
    },
  ]);
export default router;  