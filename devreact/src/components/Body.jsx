import { RestaurantCard } from "./RestaurantCard";
import { useState,useEffect,useContext} from "react";
import UserContext from "./Hooks/UserContext";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import "./Body.css";
import { filterData } from "./Helper";
import { useOnline } from "./Hooks/useOnline";

// What is state
// what is React Hooks? - functions,
// What is useState

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user,setUser}=useContext(UserContext)

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const check = useOnline();

  if(!check){
    return <h2>🛑 You are offline, please check your internet connection..!!</h2>
  }

  if (!allRestaurants) return null;

  // if(filteredRestaurants.length===0) return <h1>No restaurant match your filter !!</h1>

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <input value={user.name} onChange={e=>setUser({
        name:e.target.value
      })}></input>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.data?.id}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant?.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
