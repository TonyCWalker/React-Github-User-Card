import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from "./components/UserCard";
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      gitHubData : {},
      gitHubFollowers : []
    }
  }
  
  componentDidMount(){

    axios.get(`https://api.github.com/users/TonyCWalker`)
      .then(response => {
        const gitHubData = response.data;
        this.setState({
          gitHubData : gitHubData
        })
      })

    axios.get(`https://api.github.com/users/dustinmyers/followers`)
      .then(response =>{
        const gitHubFollowers = response.data;
        this.setState({
          gitHubFollowers : gitHubFollowers
        })
      })
    .catch(err => {
      console.log(`Error in fetching data: ${err}`);
    })
  }

  render(){
    return (
      <div className="App">
        <h1>GitHub User-Card App</h1>

        <UserCard data= {this.state} />
        <h2>Followers:</h2>
        <section className="followerContainer">
          {this.state.gitHubFollowers.map(follower => {
            return(
              <FollowerCard follower={follower} />
            )
          })}
        </section>
      </div>
    )
  }
}

export default App; 