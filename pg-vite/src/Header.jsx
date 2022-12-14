import "./css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <div className="left">
        <Link to="/" className="name">
          Pierre Guerineau
        </Link>
        <Link to="/music" >
          music
        </Link>
      </div>
      <div className="right">
        <Link to="/web" >
          web
        </Link>
        <span >contact</span>
      </div>
      <div className="sections"></div>
    </div>
  );
};

export default Header;
