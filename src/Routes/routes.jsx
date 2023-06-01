import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddToys from "../Page/Toys/Add toys/AddToys";
import Blog from "../Blogs/Blog";
import AllToys from "../Page/Toys/AllToys/AllToys";
import ViewDetails from "../Page/ViewDetails/ViewDetails";

import Category from "../Page/Category/Category";
import PrivateRoute from "./PrivateRoutes";
import MyToys from "../Page/Toys/MyToys/MyToys";



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
            element:<Login></Login>,
        },
        
        {
            path: '/register', 
            element: <SignUp></SignUp>
        },
        {
            path:'/addtoys',
            element:<PrivateRoute> <AddToys></AddToys> </PrivateRoute>,
        }, {
            path:'/mytoys',
            element:  <PrivateRoute> <MyToys></MyToys> </PrivateRoute>,
        },
        {
            path:'/alltoys',
            element:<AllToys></AllToys>
        },
       
        {
            path:'/viewdetails/:id',
            element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader:({params}) => fetch(`http://localhost:5000/allData/${params.id}`)
        },
      
        {
            path:'/catagory/:id',
            element:<Category></Category>,
            loader:({params}) => fetch(`http://localhost:5000/allData/${params.id}`)
        }
      ]
    },
  ]);
export default router;  