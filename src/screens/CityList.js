import React, {useState} from 'react';
import { ScrollView } from 'react-native'

import City from './City.js'

const CityList = ({weather,cityList,getWeather}) => {

  return (
    <ScrollView style={{ marginTop:150 }}>
	    { cityList.map(el => <City getWeather={getWeather} key={el.id} weather={el}/>)}
  	</ScrollView>
  )
}

export default CityList;