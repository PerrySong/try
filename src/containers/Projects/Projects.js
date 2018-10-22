import React, { Component } from 'react';
import Project from '../../components/Project'
import Grid from "@material-ui/core/Grid";
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <span>
          <Grid container spacing={24}>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          </Grid>
        </span>
      </div>
    )
  }
}
export default Projects;