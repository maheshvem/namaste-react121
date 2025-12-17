import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [allResList] = useState(restaurantList);
    const [list, setList] = useState(restaurantList)

    const ModifiedResList = () =>{
        const filteredList  = list.filter((res) => (res.info.avgRating >= 4))
        setList(filteredList);
    }
    const ClearFilter = () => {
        setList(allResList)
    }
    const EmptyList = () => {
        const emptyList = [];
        setList(emptyList);
    }
    if(list === 0){
        return <Shimmer />
    }
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onClick={ModifiedResList}>Top Rated Restaurants</button>
                <button className="filter-btn" onClick={ClearFilter}>Clear</button>
                <button className="filter-btn" onClick={EmptyList}>Empty</button>
            </div>
            <div className="res-container">
                {list.map((res) => (
                    <RestaurantCard
                    key = {res.info.id}
                    resData = {res.info}
                    />
                ))}
            </div>
        </div>
        
    )
}

export default Body;
