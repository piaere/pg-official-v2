import { useEffect, useState } from "react";
import "./css/music.css";

const Music = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/")
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => console.log("data", data));
  }, []);

  return <div>`music list+${data}`</div>;
};

export default Music;
