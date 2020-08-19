import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'

import CityList from './CityList.js';

const ModalCityList = ({handleModal,handleInput,weather,cityList,getWeather}) => {
  return (
    <View style={{ flex:1, backgroundColor:"rgba(77, 77, 77, 0.5)" }}>

		<TouchableOpacity style={styles.back} onPress={() => handleModal()}>
	  		<Image source={require('../img/back.png')}/>
	  	</TouchableOpacity>

	  	<Text style={styles.modalText}>Управление городами</Text>

	  	<CityList handleModal={handleModal} weather={weather} cityList={cityList} getWeather={getWeather}/>

	  	<TouchableOpacity style={styles.addCity} onPress={() => handleInput()}>
	  		<Image source={require('../img/plus.png')}/>
	  	</TouchableOpacity>

	</View>
  )
}

const styles = StyleSheet.create({
	back: {
		width:70,
		height:70,
		position:'absolute',
		paddingLeft:15,
		paddingTop:10,
		left: 0,
		top:0,
		zIndex:100,
	},
	modalText: {
		textAlign:'center',
		marginTop:10,
		letterSpacing: 0.5,
		fontWeight: 'bold',
		color:"white",
	},
	addCity: {
		position:'absolute',
		justifyContent:'center',
		alignItems:'center',
		bottom:25,
		right:25,
		width:50,
		height:50,
		backgroundColor:'#c2c2c2',
		borderRadius:60,
	},
})

export default ModalCityList;