import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <div className="left">
        <Link to="/" className="name">
          Pierre Guerineau
        </Link>
        <Link to="/music" className="section">
          music
        </Link>
      </div>
      <div className="right">
        <Link to="/web" className="section">
          web
        </Link>
        <span className="section">contact</span>
      </div>
      <div className="sections"></div>
    </div>
  );
};

export default Header;
