import React, { useState } from 'react';
import {
   Alert,
   SafeAreaView,
   StatusBar,
   StyleSheet,
   useColorScheme,
   View,
} from 'react-native';

import { Okra } from 'react-native-okra-webview';

import { FocusedStatusBar, ProfileTabHeader } from '../../components'
import { COLORS } from '../../constants';

 const Verify = () => {
   const isDarkMode = useColorScheme() === 'dark';

   return (
     <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor={COLORS.primary} 
        translucent={false}
      />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ProfileTabHeader></ProfileTabHeader>
       <View style={[styles.container, styles.flex]}>
         <Okra.BuildWithOptions
           env="production-sandbox"
           name="DaNeffy"
           products={['identity']}
           options={{selfieVerify: true}}
           onSuccess={(response) => {
             Alert.alert('Success!', JSON.stringify(response))
           }}
           onClose={(response) => {
             Alert.alert('error!', JSON.stringify(response))
           }}
         />
       </View>
     </SafeAreaView>
   );
 };

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

 export default Verify;