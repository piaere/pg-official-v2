import "./css/music.css";
import dataJSON from "./data.json";
import gif from "./images/pg.gif";
import FSA2 from "./images/FSA-by-Maria-Jose-Govea-3.jpeg";

const Music = () => {
  const data = dataJSON.music;

  return (
    <>
      <div className="section-top mobile-landscape fade-in">
        <div className="section-top-txt">
          <div className="logo-container">
            <div className="logo"> ♪ music </div>
          </div>
          <div className="bio">
            <div className="bio-paragraph ">
              Across his 10-year career as a composer, record producer and
              mixing engineer, Pierre Guerineau has contributed to a broad
              catalog of records, films, remixes and performances.
            </div>
            <div className="bio-paragraph ">
              Trained in sound engineering in France and currently based in
              Montreal (Canada), Guerineau is at ease on both sides of the
              studio glass, finding creative and innovative solutions to express
              the artist's full potential at every step of a project.
            </div>
            <div className="bio-paragraph ">
              His work has been featured in publications such as{" "}
              <i>NME, Pitchfork, The Guardian </i>
              and <i>The New York Times,</i> and his live performances have been
              presented by international institutions such as{" "}
              <i>Primavera Festival, Mutek</i> and
              <i> Berghain.</i>
            </div>
            <div className="bio-paragraph ">
              Aside from his long-time collaborative music project <i>Essaie pas</i>{" "}
              (with <i>Marie Davidson</i>), in 2020, he co-founded the{" "}
              <i>Éditions Appærent</i> imprint with{" "}
              <i>Jesse Osborne-Lanthier</i> and <i>Will Balantyne,</i>{" "}
              publishing his first solo record under the name{" "}
              <i>Feu St-Antoine</i>.
            </div>
            <div className="bio-paragraph ">
              Named after historical cases of mass hallucinations in French
              villages, <i>Feu St-Antoine's</i> music escapes conventional
              classification, using uncanny realism to create a startling realm
              of sound. Colorful, poetic and gently unsettling, Guerineau's
              work displays 'a stunningly varied and layered masterclass
              in wordless storytelling' <i>(Boomkat).</i>
            </div>
            <div className="bio-paragraph ">
              {" "}
              His services are, but are not limited to, production and
              arrangements, original music composition for film and media, mixing
              and mastering services, and remixes.
            </div>
          </div>
        </div>

        <div className="section-top-img border-left mobile-landscape">
          <img
            src={FSA2}
            className="illustration"
            alt="Feu St-Antoine by Maria Jose Govea"
          ></img>
        </div>
      </div>
      <div className="music">
        {data.map((e, i) => {
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
              title = "Official Releases";
              break;
            case "osts":
              title = "Original Motion Picture Soundtracks";
              break;
            default:
              title = "Official Remixes";
          }

          return (
            <>
              <div className="section" key={i.toString() + title}>
                {title}
              </div>
              <div key={i.toString() + content}>
                {content.map((item, i) => {
                  const category = Object.keys(item);

                  return (
                    <>
                      <div className="element" key={i.toString() + category}>
                        {category.map((e, i) => {
                          const element = item[e];

                          return (
                            <>
                              <span key={i.toString() + element}>
                                {element}
                              </span>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
        <div className="gif-center">
          <img src={gif} className="gif" loading="lazy"></img>
        </div>
      </div>
    </>
  );
};

export default Music;
