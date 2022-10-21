import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, {useState} from 'react'

import { FocusedStatusBar, ProfileTabHeader, HomeHeader, NFTCard } from '../../components'

import { COLORS, NFTData } from '../../constants';

const Collections = () => {
  const [nftData, setNftData] = useState(NFTData)

  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor={COLORS.primary} 
        translucent={false}
      />
      <ProfileTabHeader></ProfileTabHeader>
      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList 
            data={nftData}
            renderItem={({item}) => <NFTCard data={item}></NFTCard>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Collections