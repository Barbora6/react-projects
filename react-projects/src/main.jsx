import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Accordian } from "./components/accordian/Accordian.jsx";
import { RandomColor } from "./components/randomColor/RandomColor.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/accordian", element: <Accordian /> },
  { path: "/randomcolor", element: <RandomColor /> }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
