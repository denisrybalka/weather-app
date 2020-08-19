import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'

import SetImage from '../res/SetImage.js';

const City = ({ weather, getWeather, handleModal }) => {
  const { name, temp, temp_max, temp_min, icon } = weather;

  const onCityPress = () => {
  	getWeather(name)
  	handleModal(false)
  }

  return (
    <TouchableOpacity style={styles.city} onPress={() => onCityPress()}>
   		<SetImage width={20} height={20} marginHorizontal={20} icon={icon}/>
   		<View>
	   		<View style={{flexDirection:'row'}}>
		    	<Text style={styles.cityText}>{name}</Text>
		   		<Image source={require('../img/marker.png')}/>
	   		</View>
	   		<Text style={styles.degreeText}>{`${temp_max}° / ${temp_min}°`}</Text>
   		</View>
   		<Text style={styles.degree}>{temp}°</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	city: {
		flexDirection:'row',
		alignItems:'center',
		marginVertical: 10,
	},
	degree: {
		position:'absolute',
		right:20,
		color:'white',
		fontSize:18,
		fontWeight:'bold',
	},
	cityText: {
		fontWeight:'bold',
		color:'white',
	},
	degreeText: {
		fontWeight:'500',
		color:'white',
	},
})

export default City;