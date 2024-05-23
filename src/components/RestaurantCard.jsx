import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  //console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, locality, avgRating, cuisines, sla } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        src={
         CDN_URL +
          cloudinaryImageId
        }
        alt="Food image"
      />
      <h4>{name}</h4>
      <p>{locality}</p>
      <p>Rating {avgRating} of 5</p>
      <p>{cuisines.join(" , ")}</p>
      <p>{sla.slaString}</p>
    </div>
  );
};

export default RestaurantCard;