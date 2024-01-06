import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Details from "../Pages/Details/Details";
import CartPage from "../Pages/CartPage/CartPage";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: "Error Page",
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/details/:id',
        element: <Details />
      },
      {
        path: '/cart',
        element: <PrivateRoute><CartPage /></PrivateRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])