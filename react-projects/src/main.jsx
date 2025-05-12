import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Accordian } from "./components/accordian/Accordian.jsx";
import { RandomColor } from "./components/randomColor/RandomColor.jsx";
import { StarRating } from "./components/star-rating/StarRating.jsx";
import { Slider } from "./components/slider/Slider.jsx";
import { LoadButton } from "./components/load more button/LoadButton.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/accordian", element: <Accordian /> },
  { path: "/randomcolor", element: <RandomColor /> },
  { path: "/star-rating", element: <StarRating noOfStars={10} /> },
  {
    path: "/image-slider",
    element: (
      <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    )
  },
  {
    path: "/load-more-button",
    element: <LoadButton />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
