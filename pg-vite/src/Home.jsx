import "./css/Home.css";
import Scroll from "./Scroll";
// import pg from "./images/ego-web-preview.jpg";
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
          {/* <div className="description">
            is an artist
            <br />
            working with music <br />
            and web technologies
          </div> */}
        </div>
        <img src={pg} alt="portrait" className="portrait"></img>
      </div>
      {/* <Scroll /> */}
    </>
  );
};

export default Home;
