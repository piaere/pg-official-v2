import "./css/Scroll.css";
import fsa from "./images/fsa.jpeg";
import md from "./images/md.jpeg";
import newPath from "./images/newPath.jpeg";

const Scroll = () => {
  return (
    <>
      <div className="scrollContainer">
        <div className="scrollSection">
          <img src={fsa} alt="fsa" className="img-scroll"></img>
          <img src={md} alt="md" className="img-scroll"></img>
          <img src={newPath} alt="newPath" className="img-scroll"></img>
        </div>
      </div>
    </>
  );
};

export default Scroll;
