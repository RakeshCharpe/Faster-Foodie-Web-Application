import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import { useState, useEffect } from "react";
import restlists from "../Utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  // React useState Hooks is used to change the state of components
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);
  
  useEffect(() => {
    fetchData();
  }, []);

  //whenever state variable update , react triggers a reconsilation cycle(re-render the component)
  

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1165549&lng=79.05617269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // optional chaining
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Look's like you are offline !!! Please check your connection</h1>
  // console.log(listOfRestaurants);


  if (listOfRestaurants.length === 0) return <Shimmer />;
  return (
    <div className="body">
      <div className="filter flex items-center p-4">
        <div className="flex">
          <input
            type="text"
            className=" placeholder:text-slate-400 block bg-white w-full border border-orange-400 rounded-full py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 text-sm mr-2"
            value={searchText}
            placeholder="search restaurants..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-orange-400 hover:bg-orange-500 rounded-full px-4 mr-2 text-sm"
            onClick={() => {
              //filter the restaurant cards and update the UI
              console.log(searchText);
              const searchfilterlist = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(searchfilterlist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-orange-400 hover:bg-orange-500 rounded-full px-4 py-1 sm:text-sm"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setfilteredRestaurant(filtered);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="rest-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >

            {/* if the restaurant has promoted true then add promoted label to it*/}
           
            {restaurant.info.aggregatedDiscountInfoV3 != null ? (<RestaurantCardPromoted resData={ restaurant} />):( <RestaurantCard resData={restaurant} />)
             
            }
        
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
