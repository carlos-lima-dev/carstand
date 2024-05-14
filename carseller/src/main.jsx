import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Root from "./components/Layout/Root/Root";
import Missing from "./pages/Missing/Missing";
import Homepage from "./pages/Homepage/Homepage";
import Cars from "./pages/Cars/Cars";
import About from "./pages/About/About";
import {CarsProvider} from "./context/carscontext";
import Contact from "./pages/Contact/Contact";
import Car from "./pages/Car/Car";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <Homepage />
      </Root>
    ),
    errorElement: <Missing />,
  },
  {
    path: "/cars",
    element: (
      <Root>
        <Cars />
      </Root>
    ),
  },
  {
    path: "/car/:id",
    element: (
      <Root>
        <Car />
      </Root>
    ),
  },
  {
    path: "/about",
    element: (
      <Root>
        <About />
      </Root>
    ),
  },
  {
    path: "/contact",
    element: (
      <Root>
        <Contact />
      </Root>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarsProvider>
      {" "}
      {/* Aqui você usa o CarsProvider */}
      <RouterProvider router={router} />
    </CarsProvider>
  </React.StrictMode>
);
