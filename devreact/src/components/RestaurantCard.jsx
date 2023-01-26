import { img_cdn } from "./Config";
import "./RestaurantCard.css";
export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  totalRatings,
}) => {
  return (
    <div className="card">
      <img src={img_cdn + cloudinaryImageId} alt="" />

      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{lastMileTravelString}</p>
      <i className="fa fa-star" aria-hidden="true">
        {" " + totalRatings / 1000}
      </i>
    </div>
  );
};
