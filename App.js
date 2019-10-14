import React, {Component} from 'react';
import {Home,ShowMovie, FetchData,Category,Search} from './src/Screens/index'
import { createStackNavigator,createAppContainer,createSwitchNavigator } from 'react-navigation';
import { Provider } from 'mobx-react/native';
import MoviesData from './src/mobx/MoviesInfo';

export default class App extends Component {
  render(){
    return(
      <Provider MoviesData={MoviesData}>
          <AppNavContainer/>      
      </Provider>
    );
  }
}

const AppStack = createStackNavigator({  
  Home : {
    screen: Home,
    navigationOptions: {
      header: null
    },
  },
  ShowMovie : {
    screen : ShowMovie,
    navigationOptions: {
      header: null
    },
  },
  Category : {
    screen : Category
  },
  Search : {
    screen : Search
  }
});


const AppNav =  createSwitchNavigator({
  
  FetchData: FetchData,
  App: AppStack
},
{
  initialRouteName: 'FetchData',
}
);
const AppNavContainer = createAppContainer(AppNav);