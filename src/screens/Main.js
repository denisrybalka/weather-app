import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { DATE, MONTH, DAYS } from '../res/date.js'

const Main = ({ weather }) => {
  const { name, temp, temp_max, temp_min } = weather;

  const showDay = DATE.getDate();
  const showMonth = MONTH[DATE.getMonth()];
  const showHours = DATE.getHours();
  const showMin = DATE.getMinutes();

  const showDate = `${DAYS[DATE.getDay()]}  |  ${showMonth} ${showDay}  |  ${showHours}:${showMin.length === 1 ? '0' + showMin : showMin}`

  return (
    <View style={styles.main}>

  		<Text style={styles.city}>{name}</Text>
  		<Text style={styles.date}>{showDate}</Text>
  		<Text style={styles.mainDegree}>{temp}°</Text>

  		<View style={styles.tempBlock}>

  			<View>
  				<Text style={styles.temp}>+{temp_min}°</Text>
  				<Text style={styles.tempAfter}>мин.</Text>
  			</View>
  			<View>
	  			<Text style={styles.temp}>+{temp_max}°</Text>
	  			<Text style={styles.tempAfter}>макс.</Text>
  			</View>

  		</View>

  	</View>
  )
}

const styles = StyleSheet.create({
	main: {
		flex: 4,
		backgroundColor:"white",
	},
	city: {
		marginTop:30,
		textAlign:'center',
		fontWeight: 'bold',
		fontSize: 18,
		letterSpacing: 2.5,
		textTransform: 'uppercase',
	},
	date: {
		textAlign:'center',
		marginVertical: 30,
		fontWeight: '500',
		letterSpacing: 1.5,
		textTransform: 'uppercase',
		color: '#C2C2C2',
	},
	mainDegree: {
		textAlign:'center',
		fontWeight: 'bold',
		fontSize: 48,
		letterSpacing: 1.5,
	},
	tempBlock: {
		flexDirection:'row',
		justifyContent:'center',
		marginVertical: 50,
	},
	temp: {
		marginHorizontal:20,
		fontWeight: '500',
		fontSize: 18,
		letterSpacing: 1.5,
	},
	tempAfter: {
		textAlign:'center',
		fontWeight: '500',
		fontSize: 8,
		letterSpacing: 1.5,
		textTransform: 'uppercase',
		color:'#545454',
	},
})

export default Main;