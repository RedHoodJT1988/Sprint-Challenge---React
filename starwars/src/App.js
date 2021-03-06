import React, { Component } from 'react';
import './App.css';
import PeopleList from './Components/PeoplesList/PeoplesList';

class App extends Component {
  constructor() {
    super();
    this.state ={
      starwarsChars: []
    };

  }
  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ starwarsChars: data.results });
    })
    .catch(err => {
      throw new Error(err);
    });
  }
  render() {
    return (
      <div className="container d-flex justify-content-center">
          <div className="App d-flex flex-wrap">

              <div className="headDiv"><h1 className="Header">React Wars</h1></div>

              <div className="displayApp"> <PeopleList people={this.state.starwarsChars} /></div>
          </div>
      </div>
    );
  }
}

export default App;