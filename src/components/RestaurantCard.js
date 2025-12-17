

const RestaurantCard = (props) => {
    const {imageUrl, name, cuisines, avgRating, deliveryTime} = props.resData;
    return (
        <div className="res-card">
            <img
            alt="res-logo"
            className="res-logo" src={imageUrl}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Delivery in: {deliveryTime}mins</h4>
        </div>
    )
}

export default RestaurantCard;