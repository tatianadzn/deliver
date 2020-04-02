import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Landing from "./Components/Landing/Landing";
import PersonalArea from "./Components/PersonalArea/PersonalArea";
import './App.css'

class App extends Component {
  render() {
    return (
        <div className={"App"}>
            <Header/>
            <Landing/>
            <PersonalArea/>
        </div>
    );
  }
}

export default App;
