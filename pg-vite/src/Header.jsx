import "./css/Header.css";
import { useLocation, Link, NavLink } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  // BACK TO TOP OF PAGE ON CLICK WHEN NAVIGATING
  const { pathname } = useLocation();

  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const activePath = (url) => {
    if (url === pathname) {
      return { color: "rgb(154, 154, 180)", "font-weight": "900" };
    }
  };

  return (
    <nav>
      <div className="container-header">
        <div className="left">
          <NavLink to="/" className="home-btn" style={activePath("/")}>
            ✦
          </NavLink>
          <NavLink
            className="link-btn"
            to="/music"
            style={activePath("/music")}
          >
            music
          </NavLink>
        </div>
        <div className="right">
          <NavLink className="link-btn" to="/web" style={activePath("/web")}>
            web
          </NavLink>
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
