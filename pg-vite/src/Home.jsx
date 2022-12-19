import "./css/Home.css";
import pg from "./images/Pierre-Guerineau-ID.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {" "}
      <div className="container">
        <div className="left-home">
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
          <div className="left-bottom">
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
                href="https://www.instagram.com/feu.st.antoine/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="social-contact">
              <div className="social-contact-title">Contact</div>
              <a href="mailto:polemoflora@gmail.com?subject=Let's work together!">
                E-mail
              </a>
            </div>
          </div>
        </div>
        <div className="right-home">
          <img src={pg} alt="portrait" className="portrait"></img>
        </div>
      </div>
    </>
  );
};

export default Home;
