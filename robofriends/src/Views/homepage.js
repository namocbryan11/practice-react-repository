import logo from '../logo.svg';
import './homepage.css';
import React from 'react';

import nana from '../images/avatar1.jpg';
import guinnevere from '../images/avatar2.jpg';
import change from '../images/avatar3.jpg';
import odette from '../images/avatar4.jpg';

class Homepage extends React.Component {
render (){
  return (
    <div>
      <div className="Title">
        <h1 id="pageTitle">Robofriends</h1>
      </div>
      <div className="Card">
        <div className="Cards">
          <img className="cardImage" src={nana} alt="nana"/>
        </div>
        <div className="Cards">
          <img className="cardImage" src={guinnevere} alt="guinnevere"/>
        </div>
        <div className="Cards">
          <img className="cardImage" src={change} alt="chang-e"/>  
        </div>
        <div className="Cards">
          <img className="cardImage" src={odette} alt="odette"/>  
        </div>
      </div>
    </div> 
    
  );
}
}

export default Homepage;
