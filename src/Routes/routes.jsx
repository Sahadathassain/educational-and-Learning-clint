import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/Login',
            element:<Login></Login>
        }
      ]
    },
  ]);
export default router;  