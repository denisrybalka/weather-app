import React, {useState} from 'react';
import {View} from "react-native";
import {DATE,DAYS} from '../res/date.js'

import WeatherItem from './WeatherItem.js';

const Weather = ({weather}) => {
	
  let data = DATE.getDay();

  const weatherItemsList = weather ? 
  	weather.map((el,idx) => {
  		if (idx < 5) {
  			data++
	  		return (
				<WeatherItem
		  			icon={el.icon}
		  			date={DAYS[data]}
		  			key={el.id}
		  			desc={el.description}
		  			temp={el.temp}
		  		/>
	  		)
  		} else return null;
  	}) : null;

  return (
    <View>
    	{weatherItemsList}
    </View>
  )
}

export default Weather;