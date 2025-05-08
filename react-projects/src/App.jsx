import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h2>React projects</h2>
      <ul>
        <li>
          <Link to="/accordian">Accordian</Link>
        </li>
        <li>
          <Link to="/randomcolor">Generátov barev</Link>
        </li>
        <li>
          <Link to="/star-rating">Hodnocení hvězdičkami</Link>
        </li>
        <li to="/image-slider">Image slider</li>
      </ul>
    </>
  );
}

export default App;
