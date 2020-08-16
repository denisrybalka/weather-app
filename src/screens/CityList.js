import React, {useState} from 'react';
import { Modal, TouchableOpacity ,View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import City from './City.js'

const CityList = ({weather,cityList,getWeather}) => {

  return (
    <View style={styles.cityList}>
    { cityList.map(el => <City getWeather={getWeather} key={el.id} weather={el}/>)}
  	</View>
  )
}
const styles = StyleSheet.create({
	cityList: {
		marginTop:150,
	}
})

export default CityList;