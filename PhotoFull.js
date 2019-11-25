import React from 'react';
import {Image, View} from 'react-native';
import {Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class PhotoFull extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:"space-between"}} onTouchEndCapture={this.props.hide}>
                <Image style={{width:screenWidth,height:screenHeight}} source={{uri:this.props.photo.urls.regular}}></Image>
            </View>
        )
    }
}

export default PhotoFull;