import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import SetImage from '../res/SetImage.js';

const WeatherItem = ({ icon, date, desc, temp }) => {

  return (
    <View style={styles.item}>
    	<SetImage icon={icon} width={20} height={20}/>
    	<Text style={styles.text}>{date} • </Text>
    	<Text style={styles.text}>{desc}</Text>
    	<Text style={styles.temp}>{temp}°</Text>
    </View>
  )
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		marginVertical: 10,
		height:42,
		alignItems: 'center',
		marginLeft:20,
	},
	text: {
		fontWeight: "500",
	  	fontSize: 12,
	  	textTransform: "uppercase",
	  	letterSpacing: 1.5,
	  	marginLeft:10,
	},
	temp: {
		position:'absolute',
		right:20,
		fontWeight: "500",
	  	fontSize: 16,
	  	letterSpacing: 1.5,
	},
})

export default WeatherItem;