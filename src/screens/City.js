import React from 'react';
import { Modal, TouchableOpacity ,View, Text, Image, StyleSheet, ImageBackground } from 'react-native'


const City = (props) => {
  return (
    <View style={styles.city}>
   		<Image style={{width:20,height:20,marginHorizontal:15}} source={require('../img/sun.png')}/>
   		<View>
	   		<View style={{flexDirection:'row'}}>
		    	<Text style={styles.cityText}>Киев</Text>
		   		<Image source={require('../img/marker.png')}/>
	   		</View>
	   		<Text style={styles.degreeText}>+26° / +19°</Text>
   		</View>
   		<Text style={styles.degree}>+25°</Text>
    </View>
  )
}

const styles = StyleSheet.create({
	city: {
		flexDirection:'row',
		alignItems:'center',
		marginVertical: 10,
	},
	degree: {
		position:'absolute',
		right:20,
		color:'white',
		fontSize:18,
		fontWeight:'bold',
	},
	cityText: {
		fontWeight:'bold',
		color:'white',
	},
	degreeText: {
		fontWeight:'500',
		color:'white',
	},
})

export default City;