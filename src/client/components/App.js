import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { appNavClose } from '../actions/app-nav-actions';

import Home from './routes/Home';
import About from './routes/About';

import AppHeader from './AppHeader';
import AppNav from './AppNav';
import AppFooter from './AppFooter';

class App extends Component {
  componentWillMount() {
    this.props.hideNav();
  }

  render() {
    return (
      <div>
        <AppHeader />
        <AppNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
        <AppFooter />
      </div>
    );
  }
}

App.propTypes = {
  hideNav: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  hideNav: appNavClose
};

export default connect(null, mapDispatchToProps)(App);
