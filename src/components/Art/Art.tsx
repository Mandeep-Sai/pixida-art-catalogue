import { useNavigate, useParams } from "react-router-dom";
import { Dimension } from "../../types";
import { useFetchSingleArt } from "../../utilities/fetchData";
import prev_red from "./../../assets/prev_red.svg";
import "./Art.css";

const Art = () => {
  const params = useParams();
  const objId = params.id !== undefined ? params.id : "";
  const { data, isLoading, isError } = useFetchSingleArt(objId);
  const navigate = useNavigate();

  const getDimensions = (dimensions: Dimension[]) => {
    return dimensions
      .map(
        (dimension) => `${dimension.type} ${dimension.value} ${dimension.unit}`
      )
      .join(" x ");
  };
  const goBack = () => {
    navigate(-1);
  };

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
    <div className="art_detail">
      <div className="navigate_back" onClick={goBack}>
        <img src={prev_red} alt="" />
        <h5>Back to the List</h5>
      </div>
      {data !== undefined && (
        <>
          <div className="artist_image">
            <img src={data.webImage.url} alt="" />
            <h1>{data.longTitle}</h1>
          </div>
          <div className="artist_info">
            <div>
              <p>Title</p>
              <h4>{data.longTitle}</h4>
            </div>
            <div>
              <p>Artist</p>
              <h4>{data.principalOrFirstMaker}</h4>
            </div>
            <div>
              <p>Measurements</p>
              <h4>{getDimensions(data.dimensions)}</h4>
            </div>
            <div>
              <p>Description</p>
              <h4>{data.description}</h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Art;
