import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../Utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
 
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId );
    const json = await data.json();
    setResInfo(json.data);
    console.log(json);
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{costForTwoMessage}</h4>
      <h4> {avgRating}</h4>
      <h2>Menu</h2>
      {itemCards.map((items) => (
        <li key={items.card.info.id}>
          {items.card.info.name} - Rs. {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
        </li>
      ))}
    </div>
  );
};
export default RestaurantMenu;

