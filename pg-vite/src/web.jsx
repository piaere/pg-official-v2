import React, { useEffect, useRef } from "react";
import aegisVideo from "./images/aegis-loop.webm";
import aegisVideoMp4 from "./images/aegis-loop.mp4";
import mergeVideo from "./images/the-merge-demo.webm";
import mergeVideomp4 from "./images/the-merge-demo.mp4";
import thumbnailTheMerge from "./images/the-merge-logo-loop-thumbnail.jpg";
import thumbnailAegis from "./images/aegis2.jpg";
import art from "./images/14.jpg";
import GitHub from "./images/GitHub.svg";
import YouTube from "./images/YouTube.svg";
import "./css/web.css";
const Web = () => {
  const video1 = useRef(null);
  const video2 = useRef(null);

  const attemptPlay = () => {
    video1 &&
      video1.current &&
      video1.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    video2 &&
      video2.current &&
      video2.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <div className="section-top fade-in">
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
              desire to create empowering tools for individuals and communities,
              in 2022 Pierre Guerineau graduates from{" "}
              <i>Concordia University</i> in Full-Stack Web Development.
            </div>
            <div className="bio-paragraph less-padding">
              As human beings spend an increasing amount of their waking hours
              navigating and interacting online, it seem essential to offer
              users the intuitive and smooth experience we all deserve. With an
              acute sense for elegant and clear interface design, Pierre
              Guerineau is commited to offer clients organic and inviting
              spaces.
            </div>
            <div className="bio-paragraph less-padding">
              Using <i>React, Javascript and CSS,</i> he quickly started
              incorporating the 3D Library <i>Three.js</i> in his web
              applications. Completing his education with{" "}
              <i>ETH Denver x Encode's Solidity</i> program allowed him to write
              and deploy smart contracts on EVM-compatible blockchains, and
              incorporate web3 tooling in his development toolbox.
            </div>
          </div>
        </div>
      </div>
      <div className="section border-bottom">Recent projects</div>
      <div className="web">
        <div className="section-project">
          <div className="col1">
            <div className="web-project-title">aegis</div>
          </div>
          <div className="col2"></div>
          <div className="col3">
            <div className="web-paragraph">
              aegis is a non-custodial open plateform for writers and readers to
              interact directly. Users can support their favourite creators with
              a p2p tipping function. Log in and paiements are done using
              MetaMask and the Ethereum blockchain.
            </div>
            <div className="web-paragraph">
              The front-end has been built using React, the backend with Node.js
              and the database with MongoDB.
            </div>
            <div className="web-paragraph">
              Thanks to the characteristics of blockchain technology, high
              security is maintain for authentification and paiements thruout
              the website. No sensitive personal data, email, password needs to
              be stored, to the exception of the articles themselves, the users
              public addresses as well as public informations provided by the
              Ethereum Name Service API if the user has its account registered.
            </div>

            <div className="link-logos">
              <a
                className="tilt-link"
                href="https://github.com/piaere/final-project-aegis"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GitHub}></img>
              </a>
              <a
                className="tilt-link"
                href="https://youtu.be/twCqmOA_QwQ"
                target="_blank"
                rel="noreferrer"
              >
                <img src={YouTube}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="video-container">
          <video
            playsInline
            autoPlay
            loop
            muted
            alt="All the devices"
            src={aegisVideoMp4 || aegisVideo}
            poster={thumbnailAegis}
            ref={video2}
          />
        </div>

        <div className="margin"></div>

        <div className="section-project">
          <div className="web-project-title">The Merge</div>
          <div></div>
          <div className="col3">
            <div className="web-paragraph">
              Educational 3D animated single page application.
            </div>
            <div className="web-paragraph">
              Built for the Ethereum Foundation in few days, using Vite and
              Three.js and Blender.
            </div>
            <div className="link-logos">
              <a
                className="tilt-link"
                href="https://github.com/piaere/three-demo"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GitHub}></img>
              </a>
              <a
                className="tilt-link"
                href="https://youtu.be/LSWWb8DCdkU"
                target="_blank"
                rel="noreferrer"
              >
                <img src={YouTube}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="video-container">
          <video
            playsInline
            autoPlay
            loop
            muted
            alt="All the devices"
            src={mergeVideomp4 || mergeVideo}
            poster={thumbnailTheMerge}
            ref={video1}
          />
        </div>
        <div className="margin"></div>
        <div>More soon ^^</div>
      </div>
    </>
  );
};

export default Web;
