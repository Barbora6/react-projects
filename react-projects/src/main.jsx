import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Accordian } from "./components/accordian/Accordian.jsx";
import { RandomColor } from "./components/randomColor/RandomColor.jsx";
import { StarRating } from "./components/star-rating/StarRating.jsx";
import { Slider } from "./components/slider/Slider.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/accordian", element: <Accordian /> },
  { path: "/randomcolor", element: <RandomColor /> },
  { path: "/star-rating", element: <StarRating noOfStars={10} /> },
  {
    path: "/image-slider",
    element: <Slider />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
