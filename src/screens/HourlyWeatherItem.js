import React from 'react';
import { View, Text, Image } from 'react-native'

import { setImg } from '../res/img.js'

const HourlyWeatherItem = ({weather,timezone}) => {

  const { temp, icon, description, id } = weather;
  const date = new Date((id - 10800 + timezone) * 1000); // В данном случае 10800 это статическая таймзона Киева, и от неё отсчитывается время для других городов
  const hour = date.getHours();

  return (
    <View style={{ alignItems:'center', marginHorizontal:15 }}>
		<Text style={{ fontSize: 10, color:"#c2c2c2", fontWeight:'700', marginBottom: 5, }}>{hour}:00</Text>
		<Text style={{ fontSize: 18, }}>{temp}°</Text>
		<Image style={{ width:20, height:20, marginVertical:10, }} source={setImg(icon)}/>
		<Text style={{ fontSize:10, color:"#575757", marginHorizontal:5, maxWidth:75, textAlign:'center' }}>{description}</Text>
	</View>
  )
}

export default HourlyWeatherItem;