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
          <li>Swiggy Corporate</li>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
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
