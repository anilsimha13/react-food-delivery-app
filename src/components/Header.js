import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="app-logo">
        <img alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Swiggy Corporate</li>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
