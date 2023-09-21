import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "./src/LogIn";
import About from "./Component/New Id";
import Contact from "./Component/Contact";
import UserData from "./Component/UserData";
import Home from "./src/Home";
import Splash from "./src/Splash";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        {/* Splash Screen */}
        <Stack.Screen name='Splash' component={Splash} 
        options={{headerShown:false}} />

        {/* Home Screen */}
        <Stack.Screen name="LogIn" options={{headerShown:false}}>
          {(props) => <LogIn {... props} NewName={'Mayank Soni'} />}
        </Stack.Screen>

        {/* Home Screen */}
        <Stack.Screen name="Home" component={Home} 
        options={{headerShown:false}} />

        {/* About */}
        <Stack.Screen name="About" component={About} 
        options={{headerShown:false}} />

        {/* UserData Screen */}
        <Stack.Screen name="Student" component={UserData}  />

        {/* Contact Screen */}
        <Stack.Screen name="Contact" component={Contact} 
        options={{headerShown:false}}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}