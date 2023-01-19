import "./css/Header.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  
  // BACK TO TOP OF PAGE ON CLICK WHEN NAVIGATING
  const { pathname } = useLocation();

  console.log(pathname)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      </div>
    </nav>
  );
};

export default Header;
