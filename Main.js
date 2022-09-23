// import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';

import Splash from './screens/Splash'
import CryptoAuth from './screens/CryptoAuth'

import App from './screens/App'
import Home from './screens/Home'
import Details from './screens/Details'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgrounds: "transparent"
  }
}

const Main = () => {
  const connector = useWalletConnect();
  const [defaultRoute, setDefaultRoute] = useState("Splash");
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded) return null;
  // const getDefaultRoute = () => {
  //   if (connector.connected) {
  //     setDefaultRoute('Home')
  //   } else {
  //     setDefaultRoute('Splash')
  //   }
  // }

  // useEffect(() => {
  //   getDefaultRoute();
  // }, [])
  

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
        screenOptions={{headerShown: false}} 
        initialRouteName={!connector.connected ? "Splash" : "Home"}
      >
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
        <Stack.Screen name="CryptoAuth" component={CryptoAuth}></Stack.Screen>

        <Stack.Screen name="App" component={App}></Stack.Screen>
        <Stack.Screen name="Details" component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;