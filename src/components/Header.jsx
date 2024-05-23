import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  const [btntext, setbtntext] = useState("Login");

  console.log("Header");

  // if no dependency array present => useEffect called each render time
  // if empty dependency array present => useEffect called only once at initial render
  // if dependency array has any value => useEffect called only when state of that value changes
  useEffect(() => {
    console.log("useEffect");
   },[]);
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Profile</li>
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
