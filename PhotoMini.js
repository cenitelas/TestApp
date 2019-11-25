import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

class PhotoMini extends React.Component{
    render(){
        return(
            <View style={styles.item} onTouchEndCapture={()=>this.props.show(this.props.photo)}>
                <Text style={{color:'white', textAlign:"center"}}>{this.props.photo.user.name}</Text>
                <Image style={{height: 135}} source={{uri:this.props.photo.urls.small}}></Image>
                <Text style={styles.description}>{this.props.photo.description}</Text>
            </View>
        )
    }
}

export default PhotoMini;

var styles = StyleSheet.create({
    item: {
      width:screenWidth/2.12,
      height:'auto',
      fontSize: 16,
      backgroundColor:'black',
      margin:5,
      textAlign: 'center',
      overflow: 'hidden',
      borderRadius:3
    },
    description: {
        fontSize: 12,
        color:'grey'
    }
  });