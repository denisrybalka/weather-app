import React from 'react';
import {Text, StyleSheet, View, Image} from "react-native";
import {setImg} from '../res/img.js';

const WeatherItem = ({icon,date,desc,temp}) => {

  return (
    <View style={styles.item}>
    	<Image style={styles.image} source={setImg(icon)}/>
    	<Text style={styles.text}>{`${date} • `}</Text>
    	<Text style={styles.text}>{desc}</Text>
    	<Text style={styles.temp}>{`${temp}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		marginVertical: 10,
		marginHorizontal: 30,
		height:42,
		alignItems: 'center',
	},
	text: {
		fontWeight: "500",
	  	fontSize: 12,
	  	textTransform: "uppercase",
	  	letterSpacing: 1.5,
	},
	temp: {
		position:'absolute',
		right:0,
		fontWeight: "500",
	  	fontSize: 18,
	  	letterSpacing: 1.5,
	},
	image: {
		width: 30,
		height: 30,
		marginRight:10,
	}
})

export default WeatherItem;