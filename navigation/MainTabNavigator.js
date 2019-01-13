import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';



import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import User from '../screens/User';
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Greeting',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const UserStack = createStackNavigator({
  Users: User,
});

UserStack.navigationOptions = {
  tabBarLabel: 'About developer',
  tabBarIcon: ({ focused }) => (
    < Icon someIcon
      focused={focused}
      size={26}
      name='user'
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,
  UserStack,  
});
