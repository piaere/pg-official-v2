import "./css/music.css";
import dataJSON from "./data.json";

const Music = () => {
  const data = dataJSON.music;

  return (
    <div className="music">
      <div className="logo">music ♪ </div>
      {/* <div className="bio">
              Composer, record producer and mixing engineer, Pierre Guerineau’s
              work has been acclaimed in medias such as Pitchfork, The Guardian
              and The New York Times and his performances presented by
              international institutions such as Primavera Festival, Mutek or
              Berghain.
            </div> */}
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
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Music;
