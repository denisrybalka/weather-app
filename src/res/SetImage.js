import React from 'react';
import { SvgXml } from "react-native-svg";

import { icons } from './svg-s.js'; // all icons is set here

const SetImage = ({icon, width, height, marginHorizontal}) => {

  return icon ? <SvgXml xml={icons.[icon]} width={width} height={height} marginHorizontal={marginHorizontal}/> : <SvgXml xml={icons.['01d']} width={width} height={height} marginHorizontal={marginHorizontal}/>;
}

export default SetImage;