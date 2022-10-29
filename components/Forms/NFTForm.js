import { View, ScrollView, StyleSheet, Text, Button } from 'react-native'
import React from 'react'

import { COLORS, SIZES, FONTS, } from '../../constants';
import FormInput from './FormInput'
import { RectButton } from '../Button';


const NFTForm = () => {
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.formContainer}>
        <Text style={styles.formHeading}>Create New Item</Text>
        <FormInput label="Image, Video, Audio, or 3D Model" type="file" labelStyle={styles.formSubHeading} inputStyle={styles.inputStyle} />
        <FormInput label="Name" placeholder="Item name" labelStyle={styles.formSubHeading} inputStyle={styles.inputStyle} />
        <FormInput label="Description" placeholder="Provide a detailed description of your item" multiline={true} numberOfLines={4} height={150} labelStyle={styles.formSubHeading} inputStyle={styles.inputStyle} />
        <FormInput label="External link" placeholder="http://yoursite.io/item/123" labelStyle={styles.formSubHeading} inputStyle={styles.inputStyle} />
        <FormInput label="Supply" placeholder="Number of items" value={1} keyboardType='numeric' maxLength={10} labelStyle={styles.formSubHeading} inputStyle={styles.inputStyle} />
        <FormInput label="Blockchain" placeholder="" value="Ethereum" labelStyle={styles.formSubHeading} inputStyle={styles.inputStyle} />
        
        <RectButton inputText="Create" width={150} marginBottom={50} fontSize={18} marginTop={20} backgroundColor="#007AFF" />
        {/* <Button style={styles.formButton} title="Create" /> */}
      </ScrollView>
    </View>
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
    },
    formHeading: {
      fontSize: SIZES.extraLarge + 1,
      color: COLORS.primary,
      fontWeight: "500",
      marginTop: SIZES.large,
      marginBottom: SIZES.small,
    },
    formSubHeading: {
      fontSize: SIZES.large,
      color: COLORS.primary,
      fontWeight: "500",
      // marginTop: SIZES.large,
      marginBottom: SIZES.base - 2,
    },
    formContainer: {
      marginTop: (SIZES.small * 0) - 10,
      width: '100%',
      // marginBottom: SIZES.extraLarge * 3,
      paddingHorizontal: SIZES.font
    },
    formButton: {
      backgroundColor: COLORS.primary,
      width: 200,
      height: 100,
      borderRadius: SIZES.font,
      marginBottom: SIZES.large
    },
    inputStyle: {
      fontSize: SIZES.medium,
      paddingHorizontal: SIZES.font,
      borderRadius: SIZES.font,
      backgroundColor: COLORS.white,
      borderWidth: SIZES.base - 6,
      borderColor: '#e4e6ef'
    }
});

export default NFTForm