import './homepage.css';
import React from 'react';
import CardList from './CardList.js';
import RobotSearch from './RobotSearch.js';
import ApiService from '../Utils/ApiService';
import Scroll from './Scroll.js';
import ErrorChecker from './ErrorChecker';

class Homepage extends React.Component {
constructor(props)
{
  super(props);
  this.state=
  {
    robots: [],
    search: ''
  }
}

componentDidMount = () =>
{
  ApiService.getAllUsers().then((response) => {
    console.log(response);
    this.setState({robots: response.data});
  })
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
    <ErrorChecker>
      <div className="mainpage">
        {/* div for the title header */}
        <div className="Title">
          <h1 id="pageTitle">Robofriends</h1>
        </div>
        {/* implement searchbox */}
        <RobotSearch SearchChange={this.onSearchChange}/>
        {/* display cardlist and pass the value of the search */}
        <Scroll>
          <CardList robots={filter}/>
        </Scroll>
      </div> 
    </ErrorChecker>
  );
}
}

export default Homepage;
