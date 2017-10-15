import React, { Component } from 'react';

import AppHeader from './AppHeader';
import AppNav from './AppNav';
import AppFooter from './AppFooter';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppNav />
        Hello World
        <AppFooter />
      </div>
    );
  }
}

export default App;
