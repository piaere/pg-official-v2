import React, { useEffect, useRef } from "react";

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
      <div>
        <video
          style={{ maxWidth: "100%" }}
          playsInline
          loop
          muted

          alt="All the devices"
          src="https://archive.org/download/the-merge-demo/the-merge-demo.mov"
          ref={videoEl}
        />
      </div>
      <div className="section">About</div>
      <div className="bio">
        <div className="bio-paragraph">
          Jr full-stack web developper based in Montreal, with a passion for
          technologies that empower people and communities, Pierre Guerineau
          creates modern, fast and responsive web applications.
        </div>
        <div></div>
        <div></div>
        <div className="bio-paragraph">
          After graduating from Concordia University in June 2022, he started
          applying his React/ JS/ CSS skills to build real-life projects, and
          experimenting with the 3D Library Three.js. He recently completed a
          Solidity bootcamp allowing him to deploy smart contracts on
          EVM-compatible blockchains and to incorporate web3 tooling in his
          development toolbox.
        </div>
        <div className="bio-paragraph">
          In a time when human beings spend an increasing amount of their waking
          hours navigating and interacting online, it seem essential to offer
          users the intuitive and memorable experience we all deserve. With an
          acute sense for elegant and minimal interfaces design, Guerineau
          curates organic and inviting spaces.
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
