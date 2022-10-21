import React from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';

import { SHADOWS, SIZES, COLORS, FONTS } from '../constants'

const ProfileTabHeader = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View 
        style={{
            justifyContent: 'center',
            paddingHorizontal: SIZES.large,
            marginBottom: SIZES.base,
            height: 60, 
            width: '100%',
            backgroundColor: COLORS.white,
             ...SHADOWS.medium 
        }}
    >
      <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
        <AntDesign name="arrowleft" size={24} color="black" style={{marginRight: SIZES.base}} onPress={() => navigation.goBack()} />
        <Text style={{
          color: COLORS.primary,
          fontSize: SIZES.large,
          marginBottom: 2.5,
          fontWeight: "500"
        }}>
          {route.name}
        </Text>
      </View>
    </View>
  )
}

export default ProfileTabHeader