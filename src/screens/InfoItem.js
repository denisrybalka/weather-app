import React from 'react';
import { View,Text,Image,StyleSheet  } from 'react-native'

const InfoItem = ({path,label,sign,value}) => {
  return (
    <View style={styles.item}>
    	<Image source={path} style={styles.image}/>
    	<Text style={styles.text}>{label}</Text>
    	<Text style={styles.value}>{sign}</Text>
    	<Text style={styles.value}>{value}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  item: {
  	flexDirection: 'row',
  	marginVertical:20,
  },
  text: {
  	marginLeft:10,
  	fontWeight: "500",
  	fontSize: 14,
  	color: "#575757",
  	textTransform: "uppercase",
  	letterSpacing: 1.5,
  },
  value: {
  	fontWeight: "500",
  	fontSize: 14,
  	color: "#c2c2c2",
  	textTransform: "uppercase",
  	letterSpacing: 1.5,
  }
});

export default InfoItem;