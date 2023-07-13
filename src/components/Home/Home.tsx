import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MAX_LIMIT } from "../../constants";
import { useFetchArts } from "../../utilities/fetchData";
import Pagination from "../Pagination/Pagination";
import "./Home.css";
import art_placeholder_img from "../../assets/art_placeholder_img.jpg";
import Loading from "../static/Loading";
import Error from "../static/Error";
import NoData from "../static/NoData";

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
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  if (data?.artObjects !== undefined && data?.artObjects.length > 0) {
    const { artObjects } = data;
    return (
      <div className="home">
        <h1>All artwork</h1>
        <div
          className="container-fluid"
          style={{ marginTop: "32px", padding: "0px" }}
          data-testid="home_content"
        >
          <div className="row ">
            {artObjects.map((artObject, index) => {
              return (
                <div
                  key={index}
                  className="col col-12 col-sm-6 col-md-6 col-lg-4 "
                >
                  <Link to={`/art/${artObject.objectNumber}`}>
                    <div className="art">
                      {artObject.headerImage.url ? (
                        <img
                          src={artObject.headerImage.url}
                          alt="art image"
                          className="art_image"
                        />
                      ) : (
                        <img
                          src={art_placeholder_img}
                          alt="placeholder image"
                          className="art_image"
                        />
                      )}

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
        <Pagination
          pageSetter={setPage}
          currentPage={currentPage}
          count={MAX_LIMIT}
        />
      </div>
    );
  }

  return <NoData />;
};

export default Home;
