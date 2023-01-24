import React, { useEffect, useRef } from "react";
import aegisVideo from "./images/aegis-loop.webm";
import mergeVideo from "./images/the-merge-demo.webm";
import thumbnail from "./images/the-merge-logo-loop-thumbnail.jpg";
import art from "./images/14.jpg";
import "./css/web.css";
const Web = () => {
  const video1 = useRef(null);
  const video2 = useRef(null);

  const attemptPlay1 = () => {
    video1 &&
      video1.current &&
      video1.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  const attemptPlay2 = () => {
    video2 &&
      video2.current &&
      video2.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay1();
    attemptPlay2();
  }, []);

  return (
    <>
      <div className="section-top">
        <div className="section-top-img border-right ">
          <img
            src={art}
            className="fsa web-crop"
            alt="Feu St-Antoine by Maria Jose Govea"
          ></img>
        </div>
        <div className="section-top-txt margin-left">
          <div className="logo-container logo-web">
            <div className="logo logo-web mobile-landscape">🌐 web </div>
          </div>
          <div className="bio">
            <div className="bio-paragraph less-padding">
              Driven by a life-long fascination for web technologies and a
              desire to create tools that empower people and communities, in
              June 2022 Pierre Guerineau graduates from Concordia University in
              Full-Stack Web Development.
            </div>
            <div className="bio-paragraph less-padding">
              Using React, Javascript and CSS, he quickly started incorporating
              the 3D Library Three.js in his web applications. He recently
              completed a Solidity bootcamp allowing him to deploy smart
              contracts on EVM-compatible blockchains and to incorporate web3
              tooling in his development toolbox.
            </div>
            <div className="bio-paragraph less-padding">
              As human beings spend an increasing amount of their waking hours
              navigating and interacting online, it seem essential to offer
              users the intuitive and smooth experience we all deserve. With an
              acute sense for elegant and clear interface design, Pierre
              Guerineau is commited to offer clients organic and inviting
              spaces.
            </div>
          </div>
        </div>
      </div>
      <div className="web">
        <div className="web-section">Few projects</div>

        <div className="section-bottom">
          <div className="section-bottom-txt">
            <div className="web-project-title">aegis</div>
            <div className="web-paragraph">
              aegis is a non-custodial open plateform for writers and readers to
              interact directly. Users can support their favourite creators with
              a p2p tipping function. Log in and paiements are done using
              MetaMask and the Ethereum blockchain.
            </div>
            <div className="web-paragraph">
              The front-end has been built using React, the backend with Node.js
              and I’m using Mongodb for the database.
            </div>
            <div className="web-paragraph">
              Thanks to the characteristics of blockchain technology, high
              security is maintain for authentification and paiements thruout
              the website. No sensitive personal data, email, password needs to
              be stored, to the exception of the articles themselves, the users
              public addresses as well as public informations provided by the
              Ethereum Name Service API if the user has its account registered.
            </div>
            <div className="web-paragraph">
              <a
                className="tilt-link"
                href="https://github.com/piaere/final-project-aegis"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div className="video-container">
            <video
              playsInline
              loop
              muted
              alt="All the devices"
              src={aegisVideo}
              poster={thumbnail}
              ref={video2}
            />
          </div>
        </div>
        <div className="section-bottom">
          <div className="section-bottom-txt">
            <div className="web-project-title">The Merge</div>
            <div className="web-paragraph">
              Built for the Ethereum Foundation in few days.
            </div>
            <div className="web-paragraph">Using Vite and Three.js</div>
            <div className="web-paragraph">
              {" "}
              <a
                className="tilt-link"
                href="https://github.com/piaere/three-demo"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div className="video-container">
            <video
              playsInline
              loop
              muted
              alt="All the devices"
              src={mergeVideo}
              poster={thumbnail}
              ref={video1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Web;
