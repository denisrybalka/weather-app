import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Main = (props) => {

	const date = new Date();
	const month = ["Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"];
  
  return (
    <View style={styles.main}>
  		<Text style={styles.city}>Киев</Text>
  		<Text style={styles.date}>{`Понедельник  |  ${month[date.getMonth()]} ${date.getDate()}  |  ${date.getHours()}:${date.getMinutes()}`}</Text>
  		<Text style={styles.mainDegree}>25°</Text>
  		<View style={styles.tempBlock}>
  			<View>
  				<Text style={styles.temp}>+19°</Text>
  				<Text style={styles.tempAfter}>мин.</Text>
  			</View>
  			<View>
	  			<Text style={styles.temp}>+25°</Text>
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
		fontSize: 14,
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