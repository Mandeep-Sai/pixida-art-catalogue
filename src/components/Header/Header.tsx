import Logo from "../../assets/Logo.svg";
import "./Header.css";
import useWindowSize from "../../utilities/useWindowSize";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

function Header() {
  const size = useWindowSize();
  const queryRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const search = () => {
    if (queryRef.current !== null) {
      navigate(`/${queryRef.current["value"]}`);
      queryRef.current.value = "";
    }
  };

  const onKeyPressEvent = (
    event: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      search();
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="Art_Catalogue Logo" className="logo" />
        </Link>
        <div className="header_search">
          {/* Responsive search bar for different screens */}
          <input
            type="text"
            className="search_input"
            placeholder={
              size.width < 992 ? "Search..." : "Please type in your search"
            }
            ref={queryRef}
            onKeyDown={onKeyPressEvent}
          />
          {/* Display only search icon instead of text inside button in mobile version */}
          {size.width < 768 ? (
            <button className="mobile_search_button">
              <FaSearch />
            </button>
          ) : (
            <button className="search_button" onClick={search}>
              Search
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
