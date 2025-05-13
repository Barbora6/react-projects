import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Accordian } from "./components/accordian/Accordian.jsx";
import { RandomColor } from "./components/randomColor/RandomColor.jsx";
import { StarRating } from "./components/star-rating/StarRating.jsx";
import { Slider } from "./components/slider/Slider.jsx";
import { LoadButton } from "./components/load more button/LoadButton.jsx";
import { Navigation } from "./components/navigation menu/Navigation.jsx";
import { menus } from "./components/navigation menu/data.js";
import { CodeGenerator } from "./components/QR Code Generator/CodeGenerator.jsx";

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
  },
  {
    path: "/navigation-menu",
    element: <Navigation menus={menus} />
  },
  { path: "/code-generator", element: <CodeGenerator /> }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
