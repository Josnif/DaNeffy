import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import { FocusedStatusBar, ProfileTabHeader } from '../../components'
import { COLORS } from '../../constants';


const Account = () => {
  return (
    <SafeAreaView>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor={COLORS.primary} 
        translucent={false}
      />
      <ProfileTabHeader></ProfileTabHeader>
      <View>
        <Text>Account</Text>
      </View>
    </SafeAreaView>
  )
}

export default Account