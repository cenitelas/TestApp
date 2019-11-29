import React from 'react';
import {StyleSheet,Image, View} from 'react-native';
import {Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class PhotoFull extends React.Component{
    render(){
        console.log("asd");
        return(
            <View style={styles.fullPhoto} onTouchEndCapture={() => {this.props.navigation.navigate('Home')}}>
            <Image style={{flex:1}} source={{uri:this.props.navigation.getParam('item').urls.regular}}></Image>
            </View>
        )
    }
}

export default PhotoFull;

var styles = StyleSheet.create({
    fullPhoto: {
      flex: 1,
      backgroundColor:'#424240'
    }
  });