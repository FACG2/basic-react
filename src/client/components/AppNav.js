import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import classnames from 'classnames';

import { appNavClose } from '../actions/app-nav-actions';

import './AppNav.css';

class AppNav extends Component {
  render() {
    const { isActive, hide } = this.props;

    const navClass = classnames({
      'app-nav': true,
      'app-nav--hidden': !isActive
    });

    return (
      <nav className={navClass}>
        <button onClick={hide} type='button'>Close</button>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    );
  }
}

AppNav.propTypes = {
  isActive: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isActive: state.appNav.isOpen
  };
};

const mapDispatchToProps = {
  hide: appNavClose
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
