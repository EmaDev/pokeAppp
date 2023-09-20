import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';

import Navigation from './src/navigator/Navigation';
import { BottomTbs } from './src/navigator/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  return(
    <NavigationContainer>
      <BottomTbs/>
    </NavigationContainer>
  )
}

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!"
]);

export default App;
