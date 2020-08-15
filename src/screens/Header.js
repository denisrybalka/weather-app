import React,{useState,useEffect} from 'react';
import { Modal, TouchableOpacity, View, Text, Image, StyleSheet,TextInput,StatusBar,BackHandler,Alert } from 'react-native'

import CityList from './CityList.js';
import {setImg} from '../res/img.js'
import {isDay} from '../res/date.js'


const Header = ({weather}) => {
	const [modal,setModal] = useState(false);
	const [input,setInput] = useState('');
	const [showInput, setShowInput] = useState(false);
	const [searchRes, setSearch] = useState({});
	const [error,setError] = useState(false);

	async function search(text) {
		setInput(text);
		await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&lang=ru&units=metric&appid=f937e142b7a3df602830e9a106d4df09`)
    	.then(data => {
	    	if (data.ok) {
	    		return data.json()
	    	} return 0;
	    })
	    .then(results => {
	 		if (results) {
	 			setError(false);

	 			setSearch({
		 			name: results.name,
		 			temp: results.main.temp,
		            temp_max: results.main.temp_max,
		            temp_min: results.main.temp_min,
	 			})

	 		} else {
	 			setError(true);
	 		}
	    });
	}

  return (
	<View style={styles.header}>
		{ !modal ?
		<TouchableOpacity visible={false} style={styles.menuWrap} onPress={() => setModal(!modal)}>
	  		<Image hidden={true} source={require('../img/menu.png')}/>
	  	</TouchableOpacity>
	  	: null}

		<Image style={styles.image} source={setImg(weather.main.icon)}/>
		<View>
			<Text style={styles.mood}>{weather.main.weather}</Text>
			<View style={{width:40,height:5,backgroundColor:'white',alignSelf:'center'}}></View>
		</View>
		<Image style={styles.image} source={require('../img/cloud.png')}/>
		<Image style={styles.background} source={require('../img/background.png')}/>

		<Modal visible={modal && !showInput} transparent animationType='slide' onRequestClose={() => setModal(false)}>	
			<View style={{flex:1,backgroundColor:"rgba(77, 77, 77, 0.5)"}}>
	      		<StatusBar translucent backgroundColor="rgba(77, 77, 77, 0.5)"/>

				<TouchableOpacity style={styles.back} onPress={() => setModal(!modal)}>
			  		<Image source={require('../img/back.png')}/>
			  	</TouchableOpacity>

			  	<Text style={styles.modalText}>Управление городами</Text>

			  	<CityList weather={weather}/>

			  	<TouchableOpacity style={styles.addCity} onPress={() => setShowInput(true)}>
			  		<Image style={{}} source={require('../img/plus.png')}/>
			  	</TouchableOpacity>

			</View>
		</Modal>

		<Modal visible={showInput} transparent animationType='slide' onRequestClose={() => setShowInput(false)}>
			<View style={{flex:1,backgroundColor:"rgba(77, 77, 77, 0.5)",alignItems:'center'}}>
				<StatusBar translucent backgroundColor="rgba(77, 77, 77, 0.5)"/>

			  	<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}}>
			  		<Image style={{marginRight:10}} source={require('../img/search.png')}/>

			  		<TextInput
			  			style={styles.input}
			  			placeholder="Введите город"
			  			autoFocus
			  			value={input}
			  			maxLength={20}
			  			onChangeText={(text) => search(text)}
			  		/>

				  	<TouchableOpacity style={{padding: 5,}} onPress={() => setShowInput(false)}>
					  	<Text style={{color:'white'}}>Отмена</Text>
				  	</TouchableOpacity>
			  	</View>
			  	{!error && input ? <TouchableOpacity style={styles.searchBar}>
			  		<Image style={{width:20,height:20,marginHorizontal:10}} source={require('../img/sun.png')}/>
				  	<Text>{searchRes.name}</Text>
				  	<Text style={{position:'absolute',right:20}}>{`+${Math.ceil(searchRes.temp)}°`}</Text>
			  	</TouchableOpacity> : null}
			</View>
		</Modal>

	</View>
  )
}

const COLORS = !isDay ? ['#A8CEF0','#AAA8F0','#F0A8B9','#F0B9A8','#B2F0A8','#A8F0C1','#A8E7F0',
				'#BFA8F0'] : ['#274065','#4D2765'];

const rnd = Math.floor(Math.random() * COLORS.length);
const color = COLORS[rnd];

const styles = StyleSheet.create({
	header: {
		flex: 3,
		backgroundColor: color,
		position:'relative',
		height: 310,
		flexDirection: 'row',
		justifyContent:'space-around',
		paddingTop:60,
	},
	background: {
		position:"absolute",
		width:'100%',
		height:'100%',
		top:80,
		left:0,
	},
	image: {
		width: 50,
		height: 50,
	},
	mood: {
		textTransform: 'uppercase',
		letterSpacing: 1.5,
		fontWeight: 'bold',
		color:"white",
		marginTop:15,
	},
	menuWrap: {
		width:70,
		height:70,
		position:'absolute',
		left:0,
		top:0,
		paddingLeft:15,
		paddingTop:30,
	},
	back: {
		width:70,
		height:70,
		position:'absolute',
		paddingLeft:15,
		paddingTop:10,
		left: 0,
		top:0,
	},
	modalText: {
		textAlign:'center',
		marginTop:10,
		letterSpacing: 0.5,
		fontWeight: 'bold',
		color:"white",
	},
	addCity: {
		position:'absolute',
		justifyContent:'center',
		alignItems:'center',
		bottom:25,
		right:25,
		width:50,
		height:50,
		backgroundColor:'#c2c2c2',
		borderRadius:60,
	},
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
	}
})

export default Header;