import { useParams } from "react-router-dom";
import { img_cdn } from "./Config";
import Shimmer from "./Shimmer";
import './RestaurantMenu.css'
import useRestaurant from "./Hooks/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  
  if(!restaurant) return <Shimmer/>  // Early return

  return(!restaurant)?<Shimmer/>:(
    <div className="menu">
        <div>
            <h1>Restaurant id:{id}</h1>
            <h2>{restaurant.name}</h2>
            <img src={img_cdn+restaurant?.cloudinaryImageId} alt="" />
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating}stars</h3>
            <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          <ol>
            {Object.values(restaurant?.menu?.items).map((item)=>{
              return <li key={item?.id}>{item?.name}</li>
            })}
          </ol>
        </div>
    </div>
  )
};
export default RestaurantMenu;
