import React, { useEffect, useRef } from "react";
import aegisVideo from "./images/aegis-loop.webm";
import aegisVideoMp4 from "./images/aegis-loop.mp4";
import mergeVideo from "./images/the-merge-demo.webm";
import mergeVideomp4 from "./images/the-merge-demo.mp4";
import thumbnailTheMerge from "./images/the-merge-logo-loop-thumbnail.jpg";
import thumbnailAegis from "./images/aegis2.jpg";
import art from "./images/14-1.jpg";
import GitHub from "./images/GitHub.svg";
import YouTube from "./images/YouTube.svg";
import "./css/web.css";
const Web = () => {
  const videoAegis = useRef(null);
  const videoMerge = useRef(null);

  const attemptPlay = () => {
    videoAegis &&
      videoAegis.current &&
      videoAegis.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    videoMerge &&
      videoMerge.current &&
      videoMerge.current.play().catch((error) => {
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
            className="illustration web-crop"
            alt="Visual represantation of the world wide web, source unknown"
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
              in 2022 Pierre Guerineau graduated from{" "}
              <i>Concordia University</i> in Full-Stack Web Development.
            </div>
            <div className="bio-paragraph less-padding">
              As human beings spend an increasing amount of their waking hours
              navigating and interacting online, it seems essential to offer
              users the intuitive and smooth experience we all deserve. With an
              acute sense for elegant and clear interface design, Pierre
              Guerineau is committed to offer clients organic and inviting
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
            <div className="bio-paragraph less-padding">
              His services includes, but are not limited to, building multi-platform
              web-based solutions, UI / UX design and custom smart contracts
              creation.
            </div>
          </div>
        </div>
      </div>
      <div className="section border-bottom">Recent Projects</div>
      <div className="web">
        <div className="container-project">
          <div className="title">
            aegis <span className="blink">▌</span>
          </div>
          <div className="container-content">
            <div className="container-txt">
              <div className="empty-space">.</div>
              <div className="project-txt">
                {" "}
                <div className="web-paragraph">
                  aegis is a non-custodial open platform for writers and readers
                  to interact directly. Users can support their favorite
                  creators with a p2p tipping function. Log in and payments are
                  handled using a browser crypto wallet (such as <i>Metamask</i>
                  ) and the <i>Ethereum</i> blockchain.
                </div>
                <div className="web-paragraph">
                  The front-end has been built using <i>React</i>, the back-end
                  with {""}
                  <i>Node.js </i> and the database with <i>MongoDB.</i>
                </div>
                <div className="web-paragraph">
                  Thanks to the characteristics of blockchain technology, high
                  security is maintained for authentication and payments
                  throughout the website. No sensitive personal data, email or
                  passwords need to be stored, with the exception of the
                  articles themselves, the user's public addresses, and the
                  public information provided by the{" "}
                  <i>Ethereum Name Service</i> API (if the user has an account
                  registered).
                </div>
                <div className="link-logos">
                  <a
                    href="https://github.com/piaere/final-project-aegis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="zero" src={GitHub}></img>
                  </a>
                  <a
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
                ref={videoAegis}
              />
            </div>
          </div>
        </div>
        <div className="container-project">
          <div className="title">The Merge</div>

          <div className="container-content">
            <div className="container-txt">
              <div className="empty-space">.</div>
              <div className="project-txt">
                <div className="web-paragraph">
                  Educational 3D animated single page application.
                </div>
                <div className="web-paragraph">
                  Built for the <i>Ethereum Foundation</i> in just a few days
                  using
                  <i>Vite, Three.js</i> and <i> Blender.</i>
                </div>
                <div className="link-logos">
                  <a
                    href="https://github.com/piaere/three-demo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GitHub}></img>
                  </a>
                  <a
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
                ref={videoMerge}
              />
            </div>
          </div>
        </div>
        <div className="more-soon">
          More soon ^^
          <div>
            <a href="mailto:polemoflora@gmail.com?subject=Let's work together">
              Contact : polemoflora@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Web;
