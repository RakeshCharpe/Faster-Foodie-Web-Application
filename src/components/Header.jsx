import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
                  src={require('../../images/images-removebg-preview.png')}></img>
              <p>Faster Foodie</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;