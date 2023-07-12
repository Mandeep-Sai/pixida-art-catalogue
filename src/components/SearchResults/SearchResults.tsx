import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ITEMS_PER_PAGE, MAX_LIMIT } from "../../constants";

import { useFetchQueryResults } from "../../utilities/fetchData";
import Pagination from "../Pagination/Pagination";
import "./SearchResults.css";
import art_placeholder_img from "../../assets/art_placeholder_img.jpg";

const SearchResults = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const params = useParams();
  const query = params.query;
  const { data, isLoading, isError } = useFetchQueryResults(
    query as string,
    currentPage + 1
  );

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
  if (data && data.artObjects.length > 0) {
    const { artObjects, count } = data;
    return (
      <div className="search_results">
        <h1>
          Found {count} results for:
          <span style={{ color: "white" }}>{query}</span>
        </h1>
        <div
          className="container-fluid"
          style={{ marginTop: "32px", padding: "0px" }}
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
                          alt="art image"
                          className="art_image"
                        />
                      )}
                      {/* <img
                        src={artObject.headerImage.url}
                        alt="art image"
                        className="art_image"
                      /> */}
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

        {count > ITEMS_PER_PAGE && (
          <Pagination
            pageSetter={setPage}
            currentPage={currentPage}
            count={count > MAX_LIMIT ? MAX_LIMIT : count}
          />
        )}
      </div>
    );
  }

  return (
    <h1
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      No data
    </h1>
  );
};

export default SearchResults;
