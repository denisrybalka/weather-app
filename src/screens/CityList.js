import React from 'react';
import { Modal, TouchableOpacity ,View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import City from './City.js'

const CityList = (props) => {
  return (
    <View style={styles.cityList}>
  		<City/>
  	</View>
  )
}
const styles = StyleSheet.create({
	cityList: {
		marginTop:150,
	}
})

export default CityList;