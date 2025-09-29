import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock";
import { useState } from "react";

const Body = () => {
  let [listOfRest, setListOfRest] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const listOfFilteredRest = listOfRest.filter(
              (res) => res.info.avgRating > 4.4
            );

            setListOfRest(listOfFilteredRest);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRest.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
