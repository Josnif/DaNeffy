import 'node-libs-react-native/globals.js';

import "react-native-get-random-values"
// import "react-native-randombytes"
import "@ethersproject/shims"

import React from 'react';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import './global'

import Main from './Main'

// console.log();
const App = () => {
  return (
     <WalletConnectProvider 
      redirectUrl={Platform.OS === 'web' ? window.location.origin : 'daneffy://Home'}
      storageOptions= {{
        asyncStorage: AsyncStorage,
      }}
    >
        <Main />
    </WalletConnectProvider>
  );
}

export default App;