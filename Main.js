// import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import { useEffect, useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
// import UserWrapper from './context/UserWrapper'
import { UserProvider } from './context/UserWrapper'

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
  // const { currentAccount } = useContext(UserWrapper);
  // console.log(currentAccount === false ? "Splash" : "App");
  // console.log(connector.connected);
  return (
    <NavigationContainer theme={theme}>
      <UserProvider>
        <Stack.Navigator 
          screenOptions={{headerShown: false}} 
          initialRouteName={connector.connected === false ? "Splash" : "App"}
        >
          {connector.connected ? (
            <>
              <Stack.Screen name="App" component={App}></Stack.Screen>
              <Stack.Screen name="CryptoAuth" component={CryptoAuth}></Stack.Screen>
              <Stack.Screen name="Details" component={Details}></Stack.Screen>
            </>
          ) : (
            <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
          )}
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}

export default Main;