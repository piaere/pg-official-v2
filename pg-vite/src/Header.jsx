import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="container-header">
        <div className="left">
          <Link to="/" className="home-btn">
            ✦
          </Link>
          <Link className="link-btn" to="/music">
            music
          </Link>
        </div>
        <div className="right">
          <Link className="link-btn" to="/web">
            web
          </Link>
          <a
            className="link-btn"
            href="mailto:polemoflora@gmail.com?subject=Let's collaborate"
          >
            contact
          </a>
        </div>
        <div className="sections"></div>
      </div>
    </nav>
  );
};

export default Header;
