import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Nav from '../../components/Nav'
import Projects from '../Projects'
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav/>
        <Projects/>
      </div>
    )
  }
}
export default Home;