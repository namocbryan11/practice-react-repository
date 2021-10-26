import React from "react";


const Card= (props) =>
{
    return (
        <div className="cardsRobots">
            <img alt="robot" className="cardsRobots" src={`https://robohash.org/${props.robot.id}`}/>
            <h2>{props.robot.name}</h2>
            <p>{props.robot.email}</p>
        </div>
    )
}
export default Card;