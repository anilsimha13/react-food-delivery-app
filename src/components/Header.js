import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="app-logo">
        <img alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>🟢</li>
          <li>
            <Link to="/corporate">Swiggy Corporate</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>

          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
