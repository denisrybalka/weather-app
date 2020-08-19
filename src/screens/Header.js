import React, { useState } from 'react';
import { SvgXml } from "react-native-svg";
import { Modal, TouchableOpacity, View, Text, Image, StyleSheet, StatusBar } from 'react-native'

import ModalCityList from './ModalCityList.js'
import ModalCitySearch from './ModalCitySearch.js'
import SetImage from '../res/SetImage.js'

import { COLORS } from '../res/color.js'
import { background } from '../res/svg-s.js'

const Header = ({ weather, addNewCity, cityList, getWeather }) => {
	
	const [modal,setModal] = useState(false);
	const [input,setInput] = useState('');
	const [showInput, setShowInput] = useState(false);
	const [searchRes, setSearch] = useState({});
	const [error,setError] = useState(true);

	async function search(text) {
		setInput(text);

		if (text.length < 2) {
			return 0;
		}

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
		 			temp: Math.ceil(results.main.temp),
		            temp_max: Math.ceil(results.main.temp_max),
		            temp_min: Math.ceil(results.main.temp_min),
		            id: results.id,
		            icon: results.weather[0].icon,
	 			})

	 		} else {
	 			setError(true);
	 		}
	    });
	}

	const onCityAdded = () => {
		setInput('');
		if (cityList.filter(el => el.name === searchRes.name).length > 0) {
			setShowInput(false);
			return 0;
		}
		addNewCity(searchRes);
		setShowInput(false);
	}

	const handleModal = () => {
		setModal(false);
	}

	const handleInput = () => {
		setShowInput(true);
	}

  return (
	<View style={styles.header}>
		{ !modal ?
		<TouchableOpacity style={styles.menuWrap} onPress={() => setModal(!modal)}>
	  		<Image source={require('../img/menu.png')}/>
	  	</TouchableOpacity>
	  	: null}

	  	
	  	<SetImage icon={weather.main.icon} width={50} height={50}/>

		<View>
			<Text style={styles.mood}>{weather.main.weather}</Text>
			<View style={{width:40,height:5,backgroundColor:'white',alignSelf:'center'}}></View>
		</View>

		<Image style={styles.image} source={require('../img/cloud.png')}/>

		<SvgXml xml={background} position='absolute' top={125} left={0} width='100%' height='100%'/>

		<Modal visible={modal && !showInput} transparent animationType='slide' onRequestClose={() => setModal(false)}>	
  			<StatusBar translucent backgroundColor="rgba(77, 77, 77, 0.5)"/>

			<ModalCityList
				handleInput={handleInput}
				handleModal={handleModal}
				weather={weather}
				cityList={cityList}
				getWeather={getWeather}
			/>
		</Modal>

		<Modal visible={showInput} transparent animationType='slide' onRequestClose={() => setShowInput(false)}>
			<StatusBar translucent backgroundColor="rgba(77, 77, 77, 0.5)"/>

			<ModalCitySearch
				search={search}
				handleInput={handleInput}
				onCityAdded={onCityAdded}
				searchRes={searchRes}
				input={input}
				error={error}
			/>
		</Modal>

	</View>
  )
}

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
		color:"white",
		marginTop:15,
		fontWeight:'bold',
	},
	menuWrap: {
		width:70,
		height:70,
		position:'absolute',
		left:0,
		top:0,
		paddingLeft:15,
		paddingTop:30,
		zIndex:100,
	},
})

export default Header;