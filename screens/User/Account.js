import { View, Text, SafeAreaView, TextInput, StyleSheet, Switch, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'

import UserWrapper from '../../context/UserWrapper'
import { FocusedStatusBar, ProfileTabHeader, FormInput } from '../../components'
import { COLORS, SHADOWS, SIZES, FONTS} from '../../constants';


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
});

export default Account