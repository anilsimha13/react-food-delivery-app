import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, avgRating, sla, cuisines, costForTwo, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="rest-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{avgRating} Stars</h3>
      <h3>{sla.deliveryTime} Mins</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};
export default RestaurantCard;
