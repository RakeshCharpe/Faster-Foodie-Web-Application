import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Header = () => {
  const [btntext, setbtntext] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  console.log(data);

  // if no dependency array present => useEffect called each render time
  // if empty dependency array present => useEffect called only once at initial render
  // if dependency array has any value => useEffect called only when state of that value changes
  useEffect(() => {
    console.log("useEffect");
  }, [btntext]);
  return (
    <div className="flex justify-between bg-orange-300 shadow-lg m-2 rounded-md">
      <div className="flex items-center p-4">
        <img
          className="w-12"
          src={require("../../images/images-removebg-preview.png")}
        ></img>
        <p className="">Faster Foodie</p>
      </div>
      <div className="nav-items flex">
        <ul className="flex items-center space-x-4 p-4 ">
          <li className="">OnlineStatus:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/profile">Profile</Link>
          </li>
          <button
            className="hover:text-white"
            onClick={() => {
              btntext === "Login" ? setbtntext("Logout") : setbtntext("Login");
            }}
          >
            {btntext}
          </button>
          <li className="font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
