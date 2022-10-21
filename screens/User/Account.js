import { View, Text, SafeAreaView, TextInput, StyleSheet, Switch, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'

import UserWrapper from '../../context/UserWrapper'
import { FocusedStatusBar, ProfileTabHeader } from '../../components'
import { COLORS, SHADOWS, SIZES, FONTS} from '../../constants';

const FormInput = ({ label, placeholder, type='text', value, handleChange, height, ...props }) => {
  return (
    <View style={AccountStyles.inputContainer}>
      <Text style={AccountStyles.inputContainer.inputLabel}>{label}</Text>
      {
        type === 'toggle' ?
        (
          <Switch
            trackColor={{ false: "#767577", true: '#E14942' }}
            thumbColor={value ? "#ffffff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleChange}
            value={value}
            style={{right: '88%'}}
          />
        ) : 
        (
          <TextInput 
            style={AccountStyles.inputContainer.inputControl}
            placeholder={placeholder ?? label} 
            height={height ?? 60}
            value={value}
            {...props}
          />
        )
      }
    </View>
  );
}

const Account = () => {
  const { user } = useContext(UserWrapper);

  const [isStatus, setIsStatus] = useState(false);
  const toggleSwitch = () => setIsStatus(previousState => !previousState);

  return (
    <SafeAreaView>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor={COLORS.primary} 
        translucent={false}
      />
      <ProfileTabHeader></ProfileTabHeader>
      <ScrollView style={AccountStyles.formContainer}>
        <FormInput label="Full Name" placeholder="Enter your full name" value={user.name} />
        <FormInput label="About Me" placeholder="Write a description less than 100 words about yourself" value={user.about} height={100} multiline={true} numberOfLines={4} />
        <Text style={AccountStyles.formHeading}>Social Links</Text>
        <FormInput label="Facebook" value={user.facebook} />
        <FormInput label="Twitter" value={user.twitter} />
        <FormInput label="LinkedIn" value={user.linkedIn} />
        <FormInput label="Github" value={user.github} />
        <FormInput label="Verified" type="toggle" value={user.onlineStatus} handleChange={toggleSwitch} />
      </ScrollView>
    </SafeAreaView>
  )
}

const AccountStyles = StyleSheet.create({
  formHeading: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontWeight: "500",
    marginTop: SIZES.large,
    marginBottom: SIZES.base,
  },
  formContainer: {
    marginTop: SIZES.small,
    marginBottom: SIZES.extraLarge * 3,
    paddingHorizontal: SIZES.large
  },
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
      marginBottom: SIZES.base
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
});

export default Account