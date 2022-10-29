import { Switch, TextInput, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { COLORS, SHADOWS, SIZES, FONTS, assets } from '../../constants';

const FormInput = ({ label, placeholder, type='text', value, handleChange, height, labelStyle, inputStyle, ...props }) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={labelStyle ?? styles.inputContainer.inputLabel}>{label}</Text>
        {
          type === 'toggle' &&
          (
            <Switch
              trackColor={{ false: "#767577", true: '#E14942' }}
              thumbColor={value ? "#ffffff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleChange}
              value={value}
              style={{right: '88%'}}
            />
          )
        }
        {
            type === 'text' && 
          (
            <TextInput 
              style={inputStyle ?? styles.inputContainer.inputControl}
              placeholder={placeholder ?? label} 
              height={height ?? 60}
              value={value}
              {...props}
            />
          )
        } 
        {
            type === 'file' && 
          (
            <View style={styles.fileWrapper}>
              <TouchableOpacity style={styles.fileWrapper.fileControl} activeOpacity={0.6}>
                <Image
                  source={assets.ImgPlaceholder} 
                  style={styles.fileWrapper.inputControl}
                  fill={"#000"}  
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )
        } 
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
      width: '100%',
      flexDirection: 'column',
      // paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.small - 2,
      // marginBottom: SIZES.base - 10,
  
      inputLabel: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontWeight: FONTS.regular,
        marginBottom: SIZES.small
      },
      inputControl: {
        // height: 60,
        fontSize: SIZES.medium,
        paddingHorizontal: SIZES.font,
        borderRadius: SIZES.font,
        backgroundColor: COLORS.white,
        // ...SHADOWS.light
      }
    },
    fileWrapper: {
      width: 250,
      height: 180,
      borderStyle: 'dotted',
      borderWidth: SIZES.base - 4,
      padding: SIZES.small,
      borderColor: '#646664',
      borderRadius: SIZES.base + 2,
      // backgroundColor: COLORS.white,
      
      fileControl: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#e4e6eb',
        width: '100%',
        height: '100%'
      },
      
      inputControl: {
        width: 60,
        height: 50,
      }
    }
});


export default FormInput;