import './homepage.css';
import React from 'react';
import {robots} from './robots.js';
import CardList from './CardList.js';
import RobotSearch from './RobotSearch.js';

class Homepage extends React.Component {
constructor()
{
  super();
  this.state=
  {
    robots: robots,
    search: ''
  }
}

onSearchChange = (event) =>
{
  this.setState({search: event.target.value})
}

render (){
  const filter = this.state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.state.search.toLowerCase())
  })
  console.log(filter);

  return (
    <div className="mainpage">
      <div className="Title">
        <h1 id="pageTitle">Robofriends</h1>
      </div>
      <RobotSearch SearchChange={this.onSearchChange}/>
      <div className="divRobots">
        <CardList robots={filter}/>
      </div>
    </div> 
    
  );
}
}

export default Homepage;
