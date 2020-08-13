import React,{useState} from 'react';
import { Button,View, Text, Image, StyleSheet, ImageBackground } from 'react-native'

const Header = (props) => {
	const [check,setCheck] = useState(0)

  return (
  	<View style={styles.header}>

  		<Image
  			style={styles.menu}
  			source={require('../img/menu.png')}
  			onPress={() => setCheck(check+1)}
  		/>
  		<Button title="+" onPress={() => setCheck(check+1)}/>

  		<Image style={styles.image} source={require('../img/sun.png')}/>
  		<Text style={styles.mood}>{check}</Text>
  		<Image style={styles.image} source={require('../img/cloud.png')}/>
  		<Image style={styles.background} source={require('../img/background.png')}/>
  	</View>
  )
}

const styles = StyleSheet.create({
	header: {
		flex: 3,
		position:'relative',
		height: 310,
		backgroundColor:"#BFF0A8",
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
	menu: {
		position: 'absolute',
		top:10,
		left:10,
	}
})

export default Header;