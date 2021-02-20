import React, { Component } from 'react'
import '../src/App.css'
import Nav from '../src/components/Nav'
import Home from './containers/Home'
import ProjectsPage from './containers/ProjectsPage'
import BeatsPage from './containers/BeatsPage'
import AudioPage from './containers/AudioPage'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { setProjects } from './redux/projectActions'
import { setAudio } from './redux/audioActions'

class App extends Component {

  componentDidMount(){
    this.props.setProjects();
    this.props.setAudio();
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/projects' component={ ProjectsPage }/>
          <Route exact path='/beats' component={ BeatsPage }/>
          <Route exact path='/audio' component={ AudioPage }/>
          <Route exact path='/' component={ Home }/>
          <Redirect from="*" to={ "/" }/>
        </Switch>
      </div>
    )};
}

export default connect(null, { setProjects, setAudio })(App);