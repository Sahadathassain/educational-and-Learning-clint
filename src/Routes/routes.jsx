import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";

import AddToys from "../Page/Toys/Add toys/AddToys";
import MyToys from "../Page/Toys/MyToys/MyToys";
import AllToys from "../Page/Toys/AllToys/AllToys";

import ViewDetails from "../Page/ViewDetails/ViewDetails";
import Category from "../Page/Category/Category";
import Blog from "../Blogs/Blog";

import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <SignUp />,
      },

      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },

      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },

      {
        path: "/alltoys",
        element: <AllToys />,
      },

      {
        path: "/viewdetails/:id",
        element: <ViewDetails />,
      },

      {
        path: "/category/:id",
        element: <Category />,
      },
    ],
  },
]);

export default router;