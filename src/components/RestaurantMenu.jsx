
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";


const RestaurantMenu = () => {
 
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  //console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


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

