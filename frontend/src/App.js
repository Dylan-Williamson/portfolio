import React, { Component } from 'react';
import Modal from 'react-modal';
import '../src/App.css';
import Nav from '../src/components/Nav'
import Home from './containers/Home'
import ProjectsPage from './containers/ProjectsPage'
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import { setProjects } from './redux/projectActions'

class App extends Component {

  componentDidMount(){
    this.props.setProjects()
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/projects' component={ ProjectsPage }/>
          <Route exact path='/' component={ Home }/>
          <Redirect from="*" to={ "/" }/>
        </Switch>
      </div>
    )};
}

// const mapStateToProps = (state) => ({ user: state.user })

export default connect(null, { setProjects })(App);