import React, {useState} from 'react';
import { ScrollView } from 'react-native'

import City from './City.js'

const CityList = ({ weather, cityList, getWeather, handleModal }) => {

  return (
    <ScrollView style={{ marginTop:150 }}>
	    { cityList.map(el => <City handleModal={handleModal} getWeather={getWeather} key={el.id} weather={el}/>)}
  	</ScrollView>
  )
}

export default CityList;