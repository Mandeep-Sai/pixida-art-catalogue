import { useNavigate, useParams } from "react-router-dom";
import { useFetchSingleArt } from "../../utilities/fetchData";
import prev_red from "./../../assets/prev_red.svg";
import "./Art.css";
import art_placeholder_img from "../../assets/art_placeholder_img.jpg";
import Loading from "../static/Loading";
import Error from "../static/Error";
import { getDimensions } from "../../utilities/utils";

const Art = () => {
  const params = useParams();
  const objId = params.id !== undefined ? params.id : "";
  const { data, isLoading, isError } = useFetchSingleArt(objId);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <div className="art_detail" data-testid="art_content">
      <div className="navigate_back" onClick={goBack}>
        <img src={prev_red} alt="" />
        <h5>Back to the List</h5>
      </div>
      {data !== undefined && (
        <>
          <div className="artist_image">
            {data.webImage ? (
              <img src={data.webImage.url} alt="" />
            ) : (
              <img
                src={art_placeholder_img}
                alt="art image"
                className="art_image"
              />
            )}
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
