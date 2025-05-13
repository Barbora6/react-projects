import { MenuList } from "./MenuList";
import "./Navigation.css";

export const Navigation = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};
