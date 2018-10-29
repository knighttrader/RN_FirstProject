import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Home } from '@screens';

export default class FirstProject extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="home" component={Home} initial />
        </Scene>
      </Router>
    );
  }
}
