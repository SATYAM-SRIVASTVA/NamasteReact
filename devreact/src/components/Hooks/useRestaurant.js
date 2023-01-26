import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";
const useRestaurant = (id) => {
  // making a state variable for different updated url
  const [restaurant, setRestaurant] = useState(null);

  //get data from API

  useEffect(() => {
    getRestaurantInfo();
  });
  // useEffect(() => {
  //   setTimeout(() => {
  //     getRestaurantInfo();
  //   }, 5000);
  // }, [getRestaurantInfo]);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  // returning the restaurant
  return restaurant;
};
export default useRestaurant;

// hooks are basically javascript functions that cointains some logic and returns something
// functional components are different from hooks because it returns (jsx)
