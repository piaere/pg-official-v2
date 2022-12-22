import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fix">
      <div className="container-header">
        <div className="left">
          <Link to="/" className="home-symbol">
            ✦
          </Link>
          <Link to="/music">music</Link>
        </div>
        <div className="right">
          <Link to="/web">web</Link>
          <a href="mailto:polemoflora@gmail.com?subject=Let's work together!">
            contact
          </a>
        </div>
        <div className="sections"></div>
      </div>
    </div>
  );
};

export default Header;
