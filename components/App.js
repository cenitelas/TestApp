import React from 'react';
import createStore from '../stores/store';
import {Provider} from 'react-redux';
import Main from './MainContainer';
import PhotoFull from './PhotoFull';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';

const store = createStore();

const Stack = createSwitchNavigator({
  Home: Main,
  Details: PhotoFull,
},
{
  initialRouteName: 'Home',
});

const Container = createAppContainer(Stack);

class App extends React.Component{

  render(){
    return <Provider store={store}>
               <Container/>
          </Provider>
  }
}

export default App;

