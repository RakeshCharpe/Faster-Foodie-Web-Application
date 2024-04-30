import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import restlists from "../Utils/mockData";

const Body = () => {
  // React useState Hooks is used to change the state of components
  const [filteredlist, setfilteredlist] = useState(restlists);

  useEffect(() => {
    console.log("useEffect called");
  }, []);
  
  return (
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
