import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import { FocusedStatusBar, ProfileTabHeader } from '../../components'
import { COLORS } from '../../constants';

const Favorites = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor={COLORS.primary} 
        translucent={false}
      />
      <ProfileTabHeader></ProfileTabHeader>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favorites</Text>
      </View>
    </SafeAreaView>
  )
}

export default Favorites