import React, { Component } from 'react';
import axios from "axios";
import {Route, Link} from "react-router-dom"

import FriendList from "./components/Friends";
import Form from "./components/Form";

const friendsURL = 'http://localhost:5000/friends/';

class App extends Component {
    state = {
      friends: [],
      error: "",
      selected: false,
      friend: {
        name: "",
        age: "",
        email: "",
      }
    }
  

  componentDidMount() {
    axios.get(friendsURL)
    .then(res => {
      this.setState({friends: res.data})
    })
    .catch(err => {
      console.log(err)
      this.setState({error: err.message})
    })
  }

  update = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
        [e.target.name]: e.target.value
        }
      }
    })
  }

  addFriend = () => {
    axios.post(friendsURL, this.state.friend)
      .then(res => {
        this.setState({friends: res.data})
        this.props.history.push("/")
      })
      .catch(err => console.log(err))
  }

  deleteFriend = (e, idx) => {
    e.preventDefault();
    axios
      .delete(friendsURL + idx)
      .then(res => {
        this.setState({friends: res.data})
      })
      .catch(err => console.log(err))
  }

  addDataForm = (e, idx) => {
    e.preventDefault();
    this.setState({friend: this.state.friends.find(item => item.id === idx),
    selected: true
    });
    this.props.history.push("/form");
  }

  updateFriend = () => {
    axios.put(friendsURL + this.state.friend.id, this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          selected: false,
          friend: {
            name: "",
            age: null,
            email: "",
          }
        })
      })
      this.props.history.push("/");
  }

  render() {
    return (
      <div className="App">
        <div><Link exact to="/" >Your friends</Link></div>
        <br></br>
        <Route 
        exact path= "/"
        render={props =>
          <FriendList 
            {...props} 
            friends={this.state.friends}
            deleteFriend={this.deleteFriend}
            addDataForm={this.addDataForm}
            />}
        />
        <Route
        path="/form"
        render={props =>
          <Form 
            {...props} 
            friend={this.state.friend} 
            update={this.update} 
            addFriend={this.addFriend}
            selected={this.state.selected}
            updateFriend={this.updateFriend}
          />}
        />
        <br></br>
        <div><Link to="/form">Add a new friend</Link></div>
      </div>
    )
  }
}
export default App;