import React from 'react';
import { View, Text, Image } from 'react-native'

import { setImg } from '../res/img.js'

const HourlyWeatherItem = ({weather,timezone}) => {

  const { temp, icon, description, id } = weather;
  const date = new Date((id - 10800 + timezone) * 1000); // В данном случае 10800 это статическая таймзона Киева, и от неё отсчитывается время для других городов
  const hour = date.getHours();

  return (
    <View style={{ alignItems:'center', justifyContent: 'center', marginHorizontal:25 }}>
		<Text>{hour}:00</Text>
		<Text style={{ marginVertical:10}}>{temp}°</Text>
		<View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
			<Image style={{ width:20, height:20 }} source={setImg(icon)}/>
			<Text style={{ marginHorizontal:5, maxWidth:100, textAlign:'center' }}>{description}</Text>
		</View>
	</View>
  )
}

export default HourlyWeatherItem;