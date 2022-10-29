import { View, Text, Button, StyleSheet, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'

import * as ImagePicker from 'expo-image-picker';
import { FocusedStatusBar, ProfileTabHeader, NFTForm } from '../../components'
import { COLORS, assets } from '../../constants';



const UploadNFT = () => {
  const [pickedImagePath, setPickedImagePath] = useState('');

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
    }
  }

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      // console.log(result.uri);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor={COLORS.primary} 
        translucent={false}
      />
      <ProfileTabHeader></ProfileTabHeader>
      <NFTForm />

      
      {/* <View style={styles.screen}>
        <View style={styles.buttonContainer}>
          <Button onPress={showImagePicker} title="Select an image" />
          <Button onPress={openCamera} title="Open camera" />
        </View>

        <View style={styles.imageContainer}>
          {
            pickedImagePath !== '' && <Image
              source={{ uri: pickedImagePath }}
              style={styles.image}
            />
          }
        </View>
      </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'cover'
  }
});

export default UploadNFT