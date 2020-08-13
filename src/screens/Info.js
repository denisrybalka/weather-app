import React from 'react';
import { View,Text,StyleSheet  } from 'react-native'
import InfoItem from './InfoItem.js';

const Info = (props) => {
  return (
    <View style={style.infoBlock}>

    	<InfoItem
    		path={require('../img/umbrella.png')}
    		label="Вероятность осадков"
    		sign=", %  |"
    		value=" 0"
    	/>

    	<InfoItem
    		path={require('../img/humidity.png')}
    		label="Влажность"
    		sign=", %  |"
    		value=" 50"
    	/>

    	<InfoItem
    		path={require('../img/windy.png')}
    		label="Ветер"
    		sign=", м/c  |"
    		value=" 5"
    	/>

    	<InfoItem
    		path={require('../img/foog.png')}
    		label="Давление"
    		sign=", мм  |"
    		value=" 757"
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