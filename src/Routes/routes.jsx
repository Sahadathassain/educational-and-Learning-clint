import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddToys from "../Page/Toys/Add toys/AddToys";

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
        }
      ]
    },
  ]);
export default router;  