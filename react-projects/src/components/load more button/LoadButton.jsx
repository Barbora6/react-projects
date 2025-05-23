import { useEffect, useState } from "react";
import "./LoadButton.css";

export const LoadButton = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=12&skip=${
          count === 0 ? 0 : count * 12
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);
  // Spustí se vždy, když se změní count

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);
  // Pokud je celkem načteno 100 produktů, tlačítko se deaktivuje

  if (loading) {
    return <div>Načítání dat. Prosím čekejte!</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      {/* Iteruje přes pole products a pro každý produkt vykreslí obrázek a název. */}
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Načtení více produktů
        </button>
        {/* Při kliknutí zvýší count → spustí se fetchProducts() */}
        {disableButton ? <p>Dosáhli jste limitu zobrazení!</p> : null}
      </div>
    </div>
  );
};
