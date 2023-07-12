import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArtObject, PageNumberProps } from "../../types";
import { useFetchArts } from "../../utilities/fetchData";
import "./Home.css";

const Home = ({ pageNumber, checkData }: PageNumberProps) => {
  const { data, isError, isLoading } = useFetchArts(pageNumber);

  useEffect(() => {
    if (data !== undefined) {
      checkData(data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error">
        <h1>Error while fetching Data.</h1>
        <h2>Please visit after some time.</h2>
      </div>
    );
  }

  return (
    <div className="home">
      <h1>All artwork</h1>
      <div
        className="container-fluid"
        style={{ marginTop: "32px", padding: "0px" }}
      >
        <div className="row ">
          {data !== undefined &&
            data.map((artObject, index) => {
              return (
                <div
                  key={index}
                  className="col col-12 col-sm-6 col-md-6 col-lg-4 "
                >
                  <Link to={`/${artObject.objectNumber}`}>
                    <div className="art">
                      <img
                        src={artObject.headerImage.url}
                        alt="art image"
                        className="art_image"
                      />
                      <p className="art_first_maker">
                        {artObject.principalOrFirstMaker}
                      </p>
                      <h3 className="art_title">{artObject.title}</h3>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
