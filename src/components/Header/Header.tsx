import Logo from "../../assets/Logo.svg";
import "./Header.css";
import useWindowSize from "../../utilities/useWindowSize";
import { FaSearch } from "react-icons/fa";

function Header() {
  const size = useWindowSize();
  return (
    <>
      <div className="header">
        <div>
          <img src={Logo} alt="Art_Catalogue Logo" className="logo" />
        </div>
        <div className="header_search">
          <input
            type="text"
            className="search_input"
            placeholder={
              size.width < 992 ? "Search..." : "Please type in your search"
            }
          />
          {size.width < 768 ? (
            <button className="mobile_search_button">
              <FaSearch />
            </button>
          ) : (
            <button className="search_button">Search</button>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
