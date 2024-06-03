import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { CDN_URL } from "../Utils/constants.js";
import RestaurantCategory from "./RestaurantCategory.jsx";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className=" w-98 p-4">
        <div className="bg-slate-100 p-4 flex rounded-md justify-between shadow-md">
          <div className="leading-8">
            <h1 className="font-bold mb-5 text-xl">{name}</h1>
            <h3 className="text-xs mt-2">{cuisines.join(" , ")}</h3>
            <h4 className="text-xs mt-2">{costForTwoMessage}</h4>
            <h4 className="text-xs mt-2"> {avgRating} Rating</h4>
          </div>
          <div>
            <img
              className="w-[150px] h-21 rounded-md"
              src={CDN_URL + cloudinaryImageId}
              alt="food"
            />
          </div>
        </div>
        <h2 className="font-bold m-4 text-lg">Menu</h2>
        {
          categories.map((e) => (
            <RestaurantCategory data={e?.card?.card} />
          ))
        }
      </div>
  );
};
export default RestaurantMenu;
