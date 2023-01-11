import "./css/music.css";
import dataJSON from "./data.json";
import gif from "./images/pg.gif";
import pgByLou from "./images/pg-by-lou-scamble.jpg";
import FSA from "./images/FSA-by-Maria-Jose-Govea.jpeg";
import FSA2 from "./images/FSA-by-Maria-Jose-Govea-3.jpeg";

const Music = () => {
  const data = dataJSON.music;

  return (
    <div>
      <div className="music-top">
        <div className="music-top-left">
          <div className="logo-container">

        <div className="logo"> ♪ about </div>
          </div>
          <div>
        {/* <div className="section"> </div>   */}
          <div className="bio-paragraph">
            Composer, record producer and mixing engineer based in Montreal with
            10 years of experience. Pierre Guerineau has collaborated with
            countless clients on records, films and remixes.
          </div>
          <div className="bio-paragraph">
            Trained in sound engineering in France, Guerineau is at ease on both
            sides of the studio glass, finding creative and innovative solutions
            to express the artist's full potential, at every step of a project.
          </div>
          <div className="bio-paragraph">
            His work has been acclaimed in medias such as{" "}
            <i>NME, Pitchfork, The Guardian </i>
            and <i>The New York Times</i>; his live performances presented by
            international institutions such as <i>Primavera Festival, Mutek</i>{" "}
            or
            <i> Berghain.</i>
          </div>
          <div className="bio-paragraph">
            Aside his long-time collaboration with <i>Marie Davidson</i>,{" "}
            <i>Essaie pas</i>, in 2020, he co-founded the{" "}
            <i>Éditions Appærent</i> imprint with <i>Jesse Osborne-Lanthier</i>{" "}
            and <i>Will Balantyne</i>, publishing his first solo record under
            the name <i>Feu St-Antoine</i>.
          </div>
          <div className="bio-paragraph">
            Named after historical cases of mass hallucinations in French
            villages, <i>Feu St-Antoine</i>’s music reflects the subjectivity of
            reality, both as a personal and socio-political construct. Blurring
            lines between genres, Guerineau uses uncanny realism to create a
            startling realm of sound. Colourful, poetic and gently unsettling,
            his work displays — a stunningly varied and layered masterclass in
            wordless storytelling (<i>Boomkat</i>).
          </div>
          {/* <div></div> */}
          <div className="bio-paragraph">
            {" "}
            His services are, but are not limited to, production and
            arrangments, original music composition for film and media, mixing
            and mastering services, and remixes.
            {/* <br/>
          <a
            style={{ "font-style": "italic" }}
            href="mailto:polemoflora@gmail.com?subject=Let's work together!"
          >
            <i>Contact for a quote</i>
          </a> */}
          </div>
          </div>
        </div>

        <div className="music-top-right">
        <img src={FSA2} className="fsa" alt="Feu St-Antoine by Maria Jose Govea"></img>
        </div>
      </div>
      <div className="music">
       
        {data.map((e) => {
          const section = Object.keys(e);
          const content = e[section];
          let title;

          switch (section[0]) {
            case "prizes":
              title = "Prizes & Nominations";
              break;
            case "producer":
              title =
                "Producer / Mixing / Mastering Engineer Works (Selective discography)";
              break;
            case "composer":
              title = "Official Albums";
              break;
            case "osts":
              title = "Original Motion Picture Soundtracks";
              break;
            default:
              title = "Official Remixes";
          }

          return (
            <>
              <div className="section">{title}</div>
              <div>
                {content.map((item) => {
                  // console.log("item", item);
                  const category = Object.keys(item);
                  // console.log("category", category);

                  return (
                    <>
                      <div className="element">
                        {category.map((e) => {
                          // console.log("item[e]", item[e]);
                          const element = item[e];
                          return (
                            <>
                              <span>{element}</span>
                            </>
                          );
                        })}
                      </div>
                      {/* <div className="hide">test</div> */}
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
        <div className="gif-center">
          <img src={gif} className="gif"></img>
        </div>
      </div>
    </div>
  );
};

export default Music;
