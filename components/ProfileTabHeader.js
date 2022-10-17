import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';


import { SHADOWS, SIZES, COLORS } from '../constants'

const ProfileTabHeader = () => {
  const route = useRoute();

  return (
    <View 
        style={{
            justifyContent: 'center',
            paddingHorizontal: SIZES.large,
            height: 60, 
            width: '100%',
            backgroundColor: COLORS.white,
             ...SHADOWS.medium 
        }}
    >
      <Text style={{color: COLORS.primary}}>{route.name}</Text>
    </View>
  )
}

export default ProfileTabHeader