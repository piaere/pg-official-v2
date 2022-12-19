import "./css/music.css";
import dataJSON from "./data.json";
import gif from "./images/pg.gif";

const Music = () => {
  const data = dataJSON.music;

  return (
    <div className="music">
      <div className="logo">music ♪ </div>
      <div className="bio">
        <div>
          Composer, record producer and mixing engineer, Pierre Guerineau’s work
          has been acclaimed in medias such as Pitchfork, The Guardian and The
          New York Times. <br />
          His personal project
        </div>
        <div>
          Composer, record producer and mixing engineer, Pierre Guerineau’s work
          has been acclaimed in medias such as Pitchfork, The Guardian and The
          New York Times. <br />
          His live performances presented by international institutions such as
          Primavera Festival, Mutek or Berghain.
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
            title = "Producer / Mixing Engineer Works (Selective discography)";
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
      <div>2022</div>
      </div>
    </div>
  );
};

export default Music;
