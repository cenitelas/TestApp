import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

class PhotoMini extends React.Component{
    render(){

        return(
            <View style={styles.item} onTouchEndCapture={this.props.click}>
                <Text style={styles.text}>{this.props.photo.user.name}</Text>
                <Image style={styles.image} source={{uri:this.props.photo.urls.small}}></Image>
                <Text style={styles.description}>{this.props.photo.description}</Text>
            </View>
        )
    }
}

export default PhotoMini;

var styles = StyleSheet.create({
    item: {
      width:182,
      height:182,
      margin:5,
      fontSize: 16,
      backgroundColor:'black',     
      textAlign: 'center',
      borderRadius:3
    },
    description: {
        fontSize: 12,
        color:'grey'
    },
    text:{
        color:'white', 
        textAlign:"center"
    },
    image:{
        flex:6
    }
  });