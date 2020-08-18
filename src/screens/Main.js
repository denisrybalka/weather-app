import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import HourlyWeather from './HourlyWeather'

import { DATE, MONTH, DAYS } from '../res/date.js'

const Main = ({ weather, hourly }) => {
  const { name, temp, temp_max, temp_min, timezone, dt } = weather;

  const date = new Date((dt - 10800 + timezone) * 1000); // В данном случае 10800 это статическая таймзона Киева, и от неё отсчитывается время для других городов
  const showDay = date.getDate();
  const showMonth = MONTH[date.getMonth()];
  const hour = date.getHours();
  const minutes = DATE.getMinutes();
  const time = minutes < 10 ? `${hour}:0${minutes}` : `${hour}:${minutes}`;

  const showDate = `${DAYS[date.getDay()]}  |  ${showMonth} ${showDay}  | ${time}`;

  return (
    <View style={styles.main}>
  		<Text style={styles.city}>{name}</Text>
  		<Text style={styles.date}>{showDate}</Text>
		<Text style={styles.mainDegree}>{temp}°</Text>
		<HourlyWeather timezone={timezone} hourly={hourly}/>
  	</View>
  )
}

const styles = StyleSheet.create({
	main: {
		flex: 4,
		backgroundColor:"white",
		alignItems:'center',
	},
	city: {
		marginTop:30,
		fontWeight: 'bold',
		fontSize: 18,
		letterSpacing: 2.5,
		textTransform: 'uppercase',
	},
	date: {
		marginVertical: 30,
		fontWeight: '500',
		letterSpacing: 1.5,
		textTransform: 'uppercase',
		color: '#C2C2C2',
	},
	mainDegree: {
		fontWeight: 'bold',
		fontSize: 48,
		letterSpacing: 1.5,
	}
})

export default Main;