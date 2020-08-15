import React, {useState} from 'react';
import {View} from "react-native";

import WeatherItem from './WeatherItem.js';

const Weather = ({weather}) => {

	const date = new Date();
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ','ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ'];
	let data = date.getDay();

  const weatherItemsList = weather ? 
  	weather.map((el,idx) => {
  		if (idx < 5) {
  			data++
	  		return (
				<WeatherItem
		  			icon={el.icon}
		  			date={days[data]}
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