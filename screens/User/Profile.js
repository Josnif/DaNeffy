import { View, Text } from 'react-native'
import React, { useContext } from 'react'

import UserWrapper from '../../context/UserWrapper'
import { shortenAddress } from '../../utils';

const Profile = () => {
  const { currentAccount } = useContext(UserWrapper);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{shortenAddress(currentAccount)}</Text>
    </View>
  )
}

export default Profile