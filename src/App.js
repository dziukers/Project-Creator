import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetails} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateProject} />
      </Switch>
      </div>
    );
  }
}

export default App;
