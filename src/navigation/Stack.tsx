// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import BottomTabs from './BottomTab';
// import LoginScreen from '../screens/Auth/LoginScreen';
// import { fadeTransition, scaleFadeTransition } from './transitions';
// import SplashScreen from '../screens/Splash/SplashScreen';

// const Stack = createStackNavigator();

// // export default function StackNavigator() {
// //   return (
// //     <Stack.Navigator screenOptions={{ headerShown: false }}>
      
// //       <Stack.Screen name="Login" component={LoginScreen} options={fadeTransition} />
// //       <Stack.Screen name="Main" component={BottomTabs} options={scaleFadeTransition} />
// //     </Stack.Navigator>
// //   );
// // }

// export default function StackNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
      
//       <Stack.Screen
//         name="Splash"
//         component={SplashScreen}
//         options={fadeTransition}
//       />

//       <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={fadeTransition}
//       />

//       <Stack.Screen
//         name="Main"
//         component={BottomTabs}
//         options={scaleFadeTransition}
//       />
//     </Stack.Navigator>
//   );
// }
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTab';
import LoginScreen from '../screens/Auth/LoginScreen';
// import SplashScreen from '../screens/SplashScreen';
import { fadeTransition, scaleFadeTransition } from './transitions';
import SplashScreen from '../screens/Splash/SplashScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashEnd = () => {
    console.log('Splash animation completed');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onAnimationEnd={handleSplashEnd} />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} options={fadeTransition} />
      <Stack.Screen name="Main" component={BottomTabs} options={scaleFadeTransition} />
    </Stack.Navigator>
  );
}