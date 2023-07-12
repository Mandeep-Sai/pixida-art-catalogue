import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ITEMS_PER_PAGE, MAX_LIMIT } from "../../constants";
import { useFetchQueryResults } from "../../utilities/fetchData";
import Pagination from "../Pagination/Pagination";
import "./SearchResults.css";
import art_placeholder_img from "../../assets/art_placeholder_img.jpg";
import Loading from "../static/Loading";
import Error from "../static/Error";
import NoData from "../static/NoData";

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
    return <Loading />;
  }

  if (isError) {
    return <Error />;
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

  return <NoData />;
};

export default SearchResults;
