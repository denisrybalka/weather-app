import React from 'react';
import { ScrollView } from 'react-native'

import HourlyWeatherItem from './HourlyWeatherItem.js'

const HourlyWeather = ({ hourly, timezone }) => {
  
  const hourlyItems = hourly ? hourly.map((el,idx) => idx<10 ? <HourlyWeatherItem timezone={timezone} key={el.id} weather={el}/> : null) : null;

  return (
    <ScrollView style={{ marginVertical:30 }} showsHorizontalScrollIndicator={false} horizontal={true}>
		{ hourlyItems }
	</ScrollView>
  )
}

export default HourlyWeather;