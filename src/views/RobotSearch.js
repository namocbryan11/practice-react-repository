import React from "react";

const RobotSearch = (props) =>
{
    return (
        <div className="divSearch">
            <input 
            className="searchBox" 
            placeholder="Find my robot"
            type="search"
            onChange={props.SearchChange}
            />
        </div>
    );
}

export default RobotSearch;