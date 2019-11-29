import React from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';
import PhotoMini from './PhotoMini';

class Main extends React.Component{
    componentDidMount(){
        this.props.getPhotos();
    }

    render(){
        return(

            <ScrollView>
                <View style={styles.listItem}>
                    {this.props.photos && this.props.photos.map((item,i)=>
                            <PhotoMini photo={item} key={i} click={() => {
                this.props.navigation.navigate('Details', {
                item: item
              });
            }}/>
                    )}            
                </View>
            </ScrollView>

        )
    }
}

export default Main;

var styles = StyleSheet.create({
    listItem: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'stretch',
      backgroundColor:'#424240'
    }
  });