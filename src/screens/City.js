import React from 'react';
import { Modal, TouchableOpacity ,View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import {setImg} from '../res/img.js'

const City = ({weather}) => {

	const {name,temp_max,temp_min,temp,icon} = weather.main;

  return (
    <View style={styles.city}>
   		<Image style={{width:20,height:20,marginHorizontal:15}} source={setImg(icon)}/>
   		<View>
	   		<View style={{flexDirection:'row'}}>
		    	<Text style={styles.cityText}>{name}</Text>
		   		<Image source={require('../img/marker.png')}/>
	   		</View>
	   		<Text style={styles.degreeText}>{`${Math.ceil(temp_max)}° / ${Math.ceil(temp_min)}°`}</Text>
   		</View>
   		<Text style={styles.degree}>{`${Math.ceil(temp)}`}°</Text>
    </View>
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