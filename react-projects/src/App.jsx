import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <h2>React projects from freeCodeCamp.org</h2>
      </header>
      <section className="container">
        <ol>
          <li>
            <Link to="/accordian">Accordian</Link>
          </li>
          <li>
            <Link to="/randomcolor">Generátov barev</Link>
          </li>
          <li>
            <Link to="/star-rating">Hodnocení hvězdičkami</Link>
          </li>
          <li>
            <Link to="/image-slider">Image slider</Link>
          </li>
          <li>
            <Link to="/load-more-button">Load more button</Link>
          </li>
          <li>
            <Link to="/navigation-menu">Navigation menu</Link>
          </li>
        </ol>
      </section>
    </>
  );
}

export default App;
