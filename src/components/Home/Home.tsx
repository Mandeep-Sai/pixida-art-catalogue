import { useEffect, useState } from "react";
import { ArtObject } from "../../types";
import fetchAll from "../../utilities/fetchData";
import "./Home.css";

const Home = () => {
  const [artObjects, setArtObjects] = useState<ArtObject[]>([]);
  useEffect(() => {
    fetchAll()
      .then((data) => setArtObjects(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="home">
      <h1>All artwork</h1>
      <div className="container-fluid" style={{ marginTop: "32px" }}>
        <div className="row ">
          {artObjects.length > 0 ? (
            <>
              {artObjects.map((artObject, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="col col-12 col-sm-6 col-md-6 col-lg-4 "
                    >
                      <div className="art">
                        <img
                          src={artObject.headerImage.url}
                          alt="art image"
                          className="art_image"
                        />
                        <p className="art_first_maker">
                          {artObject.principalOrFirstMaker}
                        </p>
                        <h3 className="art_title">{artObject.longTitle}</h3>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <h1>No Data</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
