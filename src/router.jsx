import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/Layouts/DefaultLayouts";
import Main from "./pages/Main";
import Category from "./pages/Category";
import Menu from "./pages/Menu";

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
    ],
  },
]);

export default router;
