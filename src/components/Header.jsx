import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btntext, setbtntext] = useState("Login");
  const onlineStatus = useOnlineStatus();

  console.log("Header");

  // if no dependency array present => useEffect called each render time
  // if empty dependency array present => useEffect called only once at initial render
  // if dependency array has any value => useEffect called only when state of that value changes
  useEffect(() => {
    console.log("useEffect");
  }, [btntext]);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={require("../../images/images-removebg-preview.png")}
        ></img>
        <p>Faster Foodie</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>OnlineStatus:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btntext === "Login" ? setbtntext("Logout") : setbtntext("Login");
            }}
          >
            {btntext}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
