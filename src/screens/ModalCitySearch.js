import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, TextInput } from 'react-native'

import SetImage from '../res/SetImage.js'

const ModalCitySearch = ({ search, handleInput, onCityAdded, searchRes, input, error }) => {
  const { name, temp, icon } = searchRes;

  return (
    <View style={{ flex:1, backgroundColor:"rgba(77, 77, 77, 0.5)", alignItems:'center' }}>

	  	<View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20 }}>
	  		<Image style={{ marginRight:10 }} source={require('../img/search.png')}/>

	  		<TextInput
	  			style={styles.input}
	  			placeholder="Введите город"
	  			autoFocus
	  			value={input}
	  			maxLength={25}
	  			onChangeText={(text) => search(text)}
	  		/>

		  	<TouchableOpacity style={{ padding: 5 }} onPress={() => handleInput(false)}>
			  	<Text style={{color:'white'}}>Отмена</Text>
		  	</TouchableOpacity>
	  	</View>

	  	{!error && input.length > 2 ? <TouchableOpacity style={styles.searchBar} onPress={() => onCityAdded()}>
	  		<SetImage width={20} height={20} icon={icon} marginHorizontal={10}/>
		  	<Text>{name}</Text>
		  	<Text style={{ position:'absolute', right:20 }}>+{temp}°</Text>
	  	</TouchableOpacity> : null}

	</View>
  )
}

const styles = StyleSheet.create({
	input: {
		width:190,
		height:30,
		alignSelf:'center',
		backgroundColor:'white',
		borderRadius:10,
		fontSize:12,
		paddingLeft:10,
	},
	searchBar: {
		flexDirection:'row',
		alignItems:'center',
		width:220,
		height:30,
		backgroundColor:'white',
		borderRadius:10,
		marginVertical:5,
	},
})

export default ModalCitySearch;