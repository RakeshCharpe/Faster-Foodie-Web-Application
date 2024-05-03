import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import restlists from "../Utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // React useState Hooks is used to change the state of components
  const [filteredlist, setfilteredlist] = useState([]);

  useEffect(() => {
     fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setfilteredlist(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  

  return filteredlist.length === 0 ?  <Shimmer /> : (
    <div className="body">
      <div className="filter-btn">
        <button
          className="btn"
          onClick={() => {
            const filtered = filteredlist.filter(
              (res) => res.info.avgRating > 4
            );
           
            setfilteredlist(filtered);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredlist.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
