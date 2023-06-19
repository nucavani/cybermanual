import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Login from "./routes/Login";
import Signin from "./routes/Signin";
import ErrorPage from "./routes/ErrorPage";


const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);