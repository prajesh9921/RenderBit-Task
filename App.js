import 'react-native-gesture-handler';
import React from 'react';
import './shim'
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/Navigation/BottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailPage from './src/screens/DetailsPage';

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTab" component={MyTabs} options={{headerShown: false}}/>
        <Stack.Screen name="DetailPage" component={DetailPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
