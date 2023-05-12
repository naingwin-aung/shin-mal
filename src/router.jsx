import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/Layouts/DefaultLayouts";
import Main from "./pages/Main";
import Category from "./pages/Category";
import Menu from "./pages/Menu";
import AuthLayout from "./components/Layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Order from "./pages/Order/Order";
import OrderDetail from "./pages/Order/OrderDetail";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/token/:id/category",
        element: <Category />,
      },
      {
        path: "/token/:id/category/:categoryId/menu",
        element: <Menu />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/orders/:id",
        element: <OrderDetail />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
