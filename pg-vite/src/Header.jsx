import "./css/Header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {

  // BACK TO TOP OF PAGE ON CLICK WHEN NAVIGATING
  const [navClick, setNavClick] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navClick]);

  return (
    <nav>
      <div className="container-header">
        <div className="left">
          <Link
            to="/"
            className="home-btn"
            onClick={() => setNavClick(!navClick)}
          >
            ✦
          </Link>
          <Link
            className="link-btn"
            to="/music"
            onClick={() => setNavClick(!navClick)}
          >
            music
          </Link>
        </div>
        <div className="right">
          <Link
            className="link-btn"
            to="/web"
            onClick={() => setNavClick(!navClick)}
          >
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
