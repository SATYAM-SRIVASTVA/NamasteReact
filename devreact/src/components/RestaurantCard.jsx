import { img_cdn } from "./Config";
import "./RestaurantCard.css";
import { useContext } from "react";
import UserContext from "./Hooks/UserContext";
export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  totalRatings,
}) => {
  const {user} = useContext(UserContext);
  return (
    <div className="card">
      <img src={img_cdn + cloudinaryImageId} alt="" />

      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{lastMileTravelString}</p>
      <i className="fa fa-star" aria-hidden="true">
        {" " + totalRatings / 1000}
      </i>

      <h5>{user.name}</h5>
    </div>
  );
};
