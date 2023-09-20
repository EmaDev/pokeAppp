import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './Navigation';
import { SearchScreen } from '../screens/SearchScreen';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




const Tab = createBottomTabNavigator();

export const BottomTbs = () => {

  useEffect( () => {
    SplashScreen.hide();
  }, []);

  return (
    <Tab.Navigator
       screenOptions={{
           headerShown: false,
           tabBarActiveBackgroundColor: 'rgba(36,36,36,0.8)',
           //tabBarInactiveBackgroundColor: '#373737',
           tabBarInactiveTintColor: '#A7A7A7',
           tabBarActiveTintColor: 'white',
           tabBarLabelStyle:{
               marginBottom: (Platform.OS === 'ios') ? 0 : 10
           },
           tabBarStyle:{
               position: 'absolute',
               backgroundColor: 'rgba(57,57,57,0.96)',
               borderWidth: 0,
               elevation: 0,
               height: (Platform.OS === 'ios') ? 80 : 60
           }
       }}
    >
      <Tab.Screen name="NavigatorScreen" component={Navigation} 
      options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => 
          (
            <Icon name="list-outline" color={color} size={30}/>
          )
      }}
      />
      <Tab.Screen name="SearchScreen" component={SearchScreen} 
      options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => 
          (
            <Icon name="search-outline" color={color} size={30}/>
          )
      }}
      />
    </Tab.Navigator>
  );
}