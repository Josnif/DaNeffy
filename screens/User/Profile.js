import { SafeAreaView, FlatList, View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'

import { FocusedStatusBar, ProfileHeader, ProfileCard } from '../../components'
import UserWrapper from '../../context/UserWrapper'

import { useWalletConnect } from '@walletconnect/react-native-dapp';

const ProfileItem = [
  {
    id: 'Manage Profile',
    name: 'Profile',
    desc: 'Manage Profile',
    icon: 'account-cog',
  },
  {
    id: 'Collections',
    name: 'My Collections',
    desc: 'Manage Collections',
    icon: 'collections-bookmark',
    iconFamily: 'MaterialIcons'
  },
  {
    id: 'Verify',
    name: 'Identity Verification',
    desc: 'verify your identity to access unlimited features',
    icon: 'identifier',
  },
  {
    id: 'Settings',
    name: 'Preference',
    desc: 'Customize to your taste',
    icon: 'settings',
    iconFamily: 'MaterialIcons'
  },
  {
    id: 'Logout',
    name: 'Sign Out',
    desc: 'Remove your current credential',
    icon: 'sign-out',
    iconFamily: 'FontAwesome'
  },
];

const Profile = () => {
  // const connector = useWalletConnect();
  const { currentAccount, user, checkIfConnected, logout } = useContext(UserWrapper);
  
  useEffect(() => {
    checkIfConnected();
  }, [])
  
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <FocusedStatusBar backgroundColor={COLORS.primary} /> */}
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor='transparent' 
        translucent={true}
      />

      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList 
            data={ProfileItem}
            renderItem={({item}) => <ProfileCard data={item} handleLogout={logout}></ProfileCard>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<ProfileHeader user={user} address={currentAccount} />}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile