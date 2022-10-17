import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import { FocusedStatusBar, ProfileTabHeader } from '../../components'
import { COLORS } from '../../constants';

const Collections = () => {
  return (
    <SafeAreaView>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor={COLORS.primary} 
        translucent={false}
      />
      <ProfileTabHeader></ProfileTabHeader>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Collections</Text>
      </View>
    </SafeAreaView>
  )
}

export default Collections