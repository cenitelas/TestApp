import React from 'react';
import createStore from './stores/store';
import {Provider} from 'react-redux';
import Main from './MainContainer';
const store = createStore();

class App extends React.Component{

  render(){
    return <Provider store={store}><Main></Main></Provider>
  }
}

export default App;