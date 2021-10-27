import React from "react";


const Card= (props) =>
{
    return (
        <div className="cardsRobots">
            <img alt="robot" className="cardImage" src={`https://robohash.org/${props.robot.id}`}/>
            <h3>{props.robot.name}</h3>
            <p>{props.robot.email}</p>
        </div>
    )
}
export default Card;