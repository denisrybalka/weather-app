import React from 'react';
import {View} from "react-native";

import WeatherItem from './WeatherItem.js';

const Weather = (props) => {
  return (
    <View>
    	<WeatherItem image={require('../img/cloudy.png')} date="Вт" desc="Пасмурно" temp="21°"/>
    	<WeatherItem image={require('../img/clouds.png')} date="Ср" desc="Облачно" temp="25°"/>
    	<WeatherItem image={require('../img/clouds.png')} date="Чт" desc="Облачно" temp="23°"/>
    	<WeatherItem image={require('../img/sun.png')} date="Пт" desc="Ясно" temp="21°"/>
    	<WeatherItem image={require('../img/rainy.png')} date="Сб" desc="Дождь" temp="19°"/>
    </View>
  )
}

export default Weather;