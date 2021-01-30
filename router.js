import React from "react";
import PropTypes from "prop-types";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./home";
import People from "./people";

const Router = createStackNavigator({
  Home: { screen: Home },
  People: { screen: People }
});

export default createAppContainer(Router);