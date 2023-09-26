
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/vegetables">Vegetables</Link>
        </li>
        <li>
          <Link to="/phone">Phones</Link>
        </li>
        <li>
          <Link to="/laptop">Laptops</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

