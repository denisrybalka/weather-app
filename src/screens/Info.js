import React from 'react';
import { View,Text,StyleSheet  } from 'react-native'
import InfoItem from './InfoItem.js';

const Info = ({weather}) => {
  return (
    <View style={style.infoBlock}>

    	<InfoItem
    		path={require('../img/umbrella.png')}
    		label="Вероятность осадков"
    		sign=", %  | "
    		value={weather.humidity}
    	/>

    	<InfoItem
    		path={require('../img/humidity.png')}
    		label="Влажность"
    		sign=", %  | "
    		value={weather.humidity}
    	/>

    	<InfoItem
    		path={require('../img/windy.png')}
    		label="Ветер"
    		sign=", м/c  | "
    		value={weather.wind}
    	/>

    	<InfoItem
    		path={require('../img/foog.png')}
    		label="Давление"
    		sign=", мм  | "
    		value={weather.pressure}
    	/>

    </View>
  )
}

const style = StyleSheet.create({
	infoBlock: {
		marginHorizontal: 30,
		paddingVertical: 20,
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderColor: "#d7d7d7"
	}
})

export default Info;