import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchArts } from "../../utilities/fetchData";
import Pagination from "../Pagination/Pagination";
import "./Home.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isError, isLoading } = useFetchArts(currentPage + 1); // since the page starts from 0 in pagination npm package

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 }); // after clicking on pagination scroll to top of page
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
      <Pagination pageSetter={setPage} currentPage={currentPage} />
    </div>
  );
};

export default Home;
