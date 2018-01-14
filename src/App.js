import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import './App.css';

//Components
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';
import HomePage from './Components/Pages/HomePage';
import MyProjects from './Components/Pages/MyProjects';
import Coding4All from './Components/Pages/Coding4All';
import Interests from './Components/Pages/Interests';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Header />

        <Route exact path='/' component={HomePage} />
        <Route exact path='/HomePage' component={HomePage} />
        <Route exact path='/MyProjects' component={MyProjects} />
        <Route exact path='/Coding4All' component={Coding4All} />
        <Route exact path='/Interests' component={Interests} />

      <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
