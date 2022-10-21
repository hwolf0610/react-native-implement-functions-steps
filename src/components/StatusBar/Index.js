import {StatusBar} from 'react-native';
import React from 'react';
const StatusBarComponent = props => {
  return (
    <StatusBar backgroundColor={props.color} barStyle={props.currentStyle} />
  );
};

export default StatusBarComponent;
