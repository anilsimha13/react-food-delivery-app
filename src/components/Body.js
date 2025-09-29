import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock";
import { useState } from "react";

const Body = () => {
  let [listOfRest, setListOfRest] = useState([
    {
      info: {
        id: "657472",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/8ace35f6-df74-44db-848f-778985ecb8b4_657472.jpg",
        locality: "Ramasomayajulu Street",
        areaName: "Kakinada",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.5,
        sla: { deliveryTime: 38 },
      },
    },
    {
      info: {
        id: "657473",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/fa5feb88-5269-4d81-997c-5e7dda23fa9a_24613.JPG",
        locality: "Ramasomayajulu Street",
        areaName: "Kakinada",
        costForTwo: "₹350 for two",
        cuisines: ["Pizza", "American"],
        avgRating: 2.5,
        sla: { deliveryTime: 48 },
      },
    },
    {
      info: {
        id: "657473321",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/fa5feb88-5269-4d81-997c-5e7dda23fa9a_24613.JPG",
        locality: "Ramasomayajulu Street",
        areaName: "Kakinada",
        costForTwo: "₹350 for two",
        cuisines: ["Pizza", "American"],
        avgRating: 2.5,
        sla: { deliveryTime: 48 },
      },
    },
    {
      info: {
        id: "657475",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/fa5feb88-5269-4d81-997c-5e7dda23fa9a_24613.JPG",
        locality: "Ramasomayajulu Street",
        areaName: "Kakinada",
        costForTwo: "₹350 for two",
        cuisines: ["Pizza", "American"],
        avgRating: 5,
        sla: { deliveryTime: 48 },
      },
    },
    {
      info: {
        id: "6574754",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/fa5feb88-5269-4d81-997c-5e7dda23fa9a_24613.JPG",
        locality: "Ramasomayajulu Street",
        areaName: "Kakinada",
        costForTwo: "₹350 for two",
        cuisines: ["Pizza", "American"],
        avgRating: 2.5,
        sla: { deliveryTime: 48 },
      },
    },
    {
      info: {
        id: "6574573",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/fa5feb88-5269-4d81-997c-5e7dda23fa9a_24613.JPG",
        locality: "Ramasomayajulu Street",
        areaName: "Kakinada",
        costForTwo: "₹350 for two",
        cuisines: ["Pizza", "American"],
        avgRating: 2.5,
        sla: { deliveryTime: 48 },
      },
    },
    {
      info: {
        id: "65657473",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/fa5feb88-5269-4d81-997c-5e7dda23fa9a_24613.JPG",
        locality: "Ramasomayajulu Street",
        areaName: "Kakinada",
        costForTwo: "₹350 for two",
        cuisines: ["Pizza", "American"],
        avgRating: 4.6,
        sla: { deliveryTime: 48 },
      },
    },
  ]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const listOfFilteredRest = listOfRest.filter(
              (res) => res.info.avgRating > 4
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
