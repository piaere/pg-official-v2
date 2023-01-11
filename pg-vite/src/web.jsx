import React, { useEffect, useRef } from "react";
import loop from "./images/the-merge-logo-loop.mp4";
import thumbnail from "./images/the-merge-logo-loop-thumbnail.jpg";
import aegis from "./images/aegis-logo.jpg";
import "./css/web.css";

const Web = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <div className="web">
        <div className="logo">web ❍</div>

        {/* <div className="section">About</div> */}
        <div className="web-bio">
          <div className="item-1">
            Driven by a life-long fascination for web technologies and a desire
            to create tools that empower people and communities, Pierre
            Guerineau graduates in Full-Stack Web Development at Concordia
            University in June 2022.
          </div>
          <div className="item-2">
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              pariatur ad quaerat quidem esse. Quaerat repellat temporibus minus
              ipsam! Architecto vitae error voluptatem pariatur nulla dolorem
              eos omnis! Dicta, vitae!
            </div>
            <video
              playsInline
              loop
              muted
              alt="All the devices"
              src={loop}
              poster={thumbnail}
              ref={videoEl}
            />
          </div>
          {/* <div> Pierre Guerineau creates modern, fast and
            responsive web applications. Jr full-stack web developper based in
            Montreal,</div> */}
          <div className="item-3">
            Applying his React/ JS/ CSS skills to build real-life projects, and
            experimenting with the 3D Library Three.js. He recently completed a
            Solidity bootcamp allowing him to deploy smart contracts on
            EVM-compatible blockchains and to incorporate web3 tooling in his
            development toolbox.
          </div>
          <img className="item-4" src={aegis}></img>
          <div className="item-5">
            As human beings spend an increasing amount of their waking hours
            navigating and interacting online, it seem essential to offer users
            the intuitive and memorable experience we all deserve. With an acute
            sense for elegant and minimal interfaces design, Guerineau curates
            organic and inviting spaces.
          </div>
          {/* <div className="bio-paragraph">
          With personal projects including his duo with <i>Marie Davidson</i>,{" "}
          <i>Essaie pas</i>. In 2020, he co-founded the <i>Éditions Appærent</i>{" "}
          imprint with <i>Jesse Osborne-Lanthier</i> and <i>Will Balantyne</i>,
          publishing his first solo record under the name <i>Feu St-Antoine</i>.
        </div>

        <div className="bio-paragraph">
          His services are, but are not limited to, record production and
          arrangments, mixing services, original music composition for film and
          media, and remixes.
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Web;
