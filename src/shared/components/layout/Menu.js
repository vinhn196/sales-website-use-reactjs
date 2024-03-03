import { Link } from "react-router-dom";
const Menu = ({ categories }) => {
  return (
    <div id="menu" className="collapse navbar-collapse">
      <ul>
        {categories.map((category) => (
          <li className="menu-item">
            <Link to={`/Category-${category._id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
