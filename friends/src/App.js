import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
    error: null,
    loading: false
  }

  componentDidMount() {
    this.fetchFriends();
  }

  fetchFriends = () => {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setFriends(res.data))
  }

  setFriends = friends => {
    this.setState({ friends })
  }


  render() {
    return (
      <div>
        <h2>Add a new friend</h2>
        <div>Name: <input></input></div>
        <div>Age: <input></input></div>
        <div>Email: <input></input></div>
        <button>Add friend</button>
        <br></br>
        <h2>Friends List</h2>
        {
          this.state.friends.map(friend =>
            <div>
              <p><span>Name:</span> {friend.name}<span> | Age:</span> {friend.age} | <span>Email:</span> {friend.email}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
