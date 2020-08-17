import React,{useState,useEffect} from 'react';
import { Modal, TouchableOpacity, View, Text, Image, StyleSheet,TextInput,StatusBar,BackHandler,Alert } from 'react-native'

import ModalCityList from './ModalCityList.js'
import ModalCitySearch from './ModalCitySearch.js'

import { setImg } from '../res/img.js'
import { isDay } from '../res/date.js'

const Header = ({weather,addNewCity,cityList,getWeather}) => {

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
		 			temp: results.main.temp,
		            temp_max: results.main.temp_max,
		            temp_min: results.main.temp_min,
		            id: results.dt,
		            icon: results.weather[0].icon,
	 			})

	 		} else {
	 			setError(true);
	 			setSearch({});
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
			<ModalCityList
				handleInput={handleInput}
				handleModal={handleModal}
				weather={weather}
				cityList={cityList}
				getWeather={getWeather}
			/>
		</Modal>

		<Modal visible={showInput} transparent animationType='slide' onRequestClose={() => setShowInput(false)}>
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