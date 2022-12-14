import "./css/Home.css";
import Scroll from "./Scroll";
import pg from "./images/pg-blue.jpg";


const Home = () => {


  return (
    <>
      {" "}
      <div className="container">
        <div className="description">
          Pierre Guerineau is an artist working with music and web technologies
        </div>
        <img src={pg} alt="portrait" className="portrait"></img>
      </div>
      <canvas id="bg"></canvas>
      <Scroll />
    </>
  );
};

export default Home;
