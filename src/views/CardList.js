import React from "react";
import Card from "./Card.js";

const CardList = (props) =>
{
    const robotsArray = props.robots.map((robot, index) => {
        return <Card key={index} robot={robot}/>
    })
    return (
    <div className="divRobots">
    
        {robotsArray}
    </div>
    );
}

export default CardList;