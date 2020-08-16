import React, {useState} from 'react';
import { Modal, TouchableOpacity ,ScrollView, Text, Image, StyleSheet } from 'react-native'
import City from './City.js'

const CityList = ({weather,cityList,getWeather}) => {

  return (
    <ScrollView style={styles.cityList}>
	    { cityList.map(el => <City getWeather={getWeather} key={el.id} weather={el}/>)}
  	</ScrollView>
  )
}
const styles = StyleSheet.create({
	cityList: {
		marginTop:150,
	}
})

export default CityList;