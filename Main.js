import React from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';
import PhotoMini from './PhotoMini';
import PhotoFull from './PhotoFull';

class Main extends React.Component{
    constructor(props){
            super(props);
            this.state={
                showPhoto:null
            }
    }
    componentDidMount(){
        this.props.getPhotos();
    }

    onShowPhoto = (photo)=>{
        this.setState({showPhoto:photo});
    }

    onHidePhoto = ()=>{
        this.setState({showPhoto:null});
    }

    render(){
        return(

            <ScrollView>
                <View style={styles.listItem}>
                    {this.state.showPhoto
                    ?
                        <PhotoFull photo={this.state.showPhoto} hide={this.onHidePhoto}></PhotoFull>
                    :
                        this.props.photos && this.props.photos.map((item,i)=>
                            <PhotoMini photo={item} key={i} show={this.onShowPhoto}/>
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
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'flex-start',
      backgroundColor:'#424240'
    }
  });