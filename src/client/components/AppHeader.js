import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { appNavOpen } from '../actions/app-nav-actions';

class AppHeader extends Component {
  render() {
    const { showNav, isNavOpen } = this.props;

    return (
      <header>
        App Header
        {
          !isNavOpen &&
          <button onClick={showNav} type='button'>
            Menu
          </button>
        }
      </header>
    );
  }
}

AppHeader.propTypes = {
  showNav: PropTypes.func.isRequired,
  isNavOpen: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isNavOpen: state.appNav.isOpen
  };
};

const mapDispatchToProps = {
  showNav: appNavOpen
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
