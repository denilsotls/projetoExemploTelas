import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import Unipar from '../screens/Unipar';
import TelaFinal from '../screens/TelaFinal';
import ViewData from '../screens/ViewData';
import YourData from '../screens/YourDada';




const Stack = createNativeStackNavigator();


export default function MyRotes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Unipar">
        <Stack.Screen options={{headerTransparent:true, headerShown: false}} name="Unipar" component={Unipar} />
        <Stack.Screen options={{headerTransparent:true, headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerTransparent:true, headerShown: false}} name="Dados" component={YourData} />
        <Stack.Screen options={{headerTransparent:true, headerShown: false}} name="ViewData" component={ViewData} />
        <Stack.Screen options={{headerTransparent:true, headerShown: false}} name="Finalizar" component={TelaFinal} />

       
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//options={{headerTransparent: true, headerShown: false}}