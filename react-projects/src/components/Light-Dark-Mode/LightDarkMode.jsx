import { useLocalStorage } from "./useLocalStorage";
import "./LightDarkMode.css";

export const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world!</p>
        <button onClick={handleToggleTheme}>Změnit mode!</button>
      </div>
    </div>
  );
};
