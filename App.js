import React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Component/SignUp';
import Signin from './Component/Signin';
import Home from './Component/Home';
import Help from './Component/HomeCatagories/Help'
import About from './Component/HomeCatagories/About'
import Cart from './Component/Cart';
import AvailableArea from './Component/HomeCatagories/AvaibleArea'
import Liyari from './Component/HomeCatagories/Liyari'
import Baldia from './Component/HomeCatagories/Baldia'
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={Signin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="AvailableArea" component={AvailableArea} />
        <Stack.Screen name="Baldia" component={Baldia} />
    
        <Stack.Screen name="Liyari" component={Liyari} />
    
         </Stack.Navigator>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     marginTop:200,
//     alignItems:'center',
//     justifyContent:'center',
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });