import "./css/music.css";
import dataJSON from "./data.json";
import gif from "./images/pg.gif";

const Music = () => {
  const data = dataJSON.music;

  return (
    <div className="music">
      <div className="logo">music ♪ </div>
      <div className="section">About</div>
      <div className="bio">
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
          international institutions such as <i>Primavera Festival, Mutek</i> or
          <i> Berghain.</i>
        </div>
        <div className="bio-paragraph">
          With personal projects including his duo with <i>Marie Davidson</i>,{" "}
          <i>Essaie pas</i>. In 2020, he co-founded the <i>Éditions Appærent</i>{" "}
          imprint with <i>Jesse Osborne-Lanthier</i> and <i>Will Balantyne</i>,
          publishing his first solo record under the name <i>Feu St-Antoine</i>.
        </div>
        {/* <div></div> */}
        <div className="bio-paragraph">
          {" "}
          His services are, but are not limited to, record production and arrangments, mixing
          services, original music composition for film and media, and remixes.
          {/* <br/>
          <a
            style={{ "font-style": "italic" }}
            href="mailto:polemoflora@gmail.com?subject=Let's work together!"
          >
            <i>Contact for a quote</i>
          </a> */}
        </div>
      </div>
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
        <div>❧</div>
        <div>2022</div>
      </div>
    </div>
  );
};

export default Music;
