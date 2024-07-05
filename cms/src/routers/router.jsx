import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/Login";
import Home from "../views/Home";
import AddProduct from "../views/AddProduct";
import Toastify from "toastify-js";
import Detail from "../views/Detail";
import BaseLayout from "../views/BaseLayout";
import EditForm from "../views/EditForm";
import ShowCat from "../views/ShowCat";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You already logged in",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("/home");
      }
      return null;
    },
  },
  { path: "/",
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.access_token) {
        Toastify({
          text: "Please log in first",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("login");
      }

      return null;
    },
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "add",
        element: <AddProduct />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "edit/:id",
        element: <EditForm />
      },
      {
        path: "categories",
        element: <ShowCat />
      }
    ],
  },
]);
