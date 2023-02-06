import "./css/Home.css";
import pg from "./images/Pierre-Guerineau-ID2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {" "}
      <div className="container fade-in">
        <div className="left-home left-home-top">
          <div className="PG">
            {" "}
            Pierre Guerineau is an artist working with{" "}
            <Link className="music-web" to="/music">
              music
            </Link>{" "}
            and{" "}
            <Link className="music-web" to="/web">
              web
            </Link>{" "}
            technologies ◌ offering creative services in Canada and abroad.
          </div>
        </div>
        <div className="right-home">
          <img src={pg} alt="portrait" className="portrait"></img>
        </div>
        <div className="left-home left-home-bottom">
          <div className="social-contact-box">
            <div className="social-contact">
              <div className="social-contact-title">Social</div>
              <a
                className="tilt-link"
                href="https://www.linkedin.com/in/piaere/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <br />
              <a
                className="tilt-link"
                href="https://github.com/piaere"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <br />
              <a
                href="https://www.instagram.com/feu.st.antoine/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="social-contact">
              <div className="social-contact-title">Contact</div>
              <a href="mailto:polemoflora@gmail.com?subject=Let's work together">
                E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
