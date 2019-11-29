import React from 'react';
import {StyleSheet,Image, View} from 'react-native';

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