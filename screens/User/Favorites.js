import { View, Text, SafeAreaView, FlatList, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

import { FocusedStatusBar, ProfileTabHeader, NFTCard } from '../../components'
import { COLORS, NFTData, assets, SIZES, SHADOWS } from '../../constants';

const Favorites = () => {
  const [nftData, setNftData] = useState(NFTData)

  const handleSearch = (value) => {
    if (value.length == 0) return setNftData(NFTData);
    
    const filteredNFTData = NFTData.filter(item => 
      item.name.toLowerCase().includes(value.toLowerCase())
    )
    
    if (filteredNFTData.length) {
      setNftData(filteredNFTData);
    } else {
      setNftData([]);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor={COLORS.primary} 
        translucent={false}
      />
      <ProfileTabHeader></ProfileTabHeader>
      <View style={{flex: 1, paddingHorizontal: SIZES.base}}>
        <View style={{zIndex: 0, marginBottom: SIZES.extraLarge * 4 }}>
          <View style={{marginVertical: SIZES.base, paddingHorizontal: SIZES.base}}>
            <View style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.white,
              borderRadius: SIZES.font,
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
              ...SHADOWS.light
            }}>
              <Ionicons name="search" size={22} color="black"  style={{ width: 22, height: 22, marginRight: SIZES.base }}/>
              <TextInput 
                style={{flex: 1}}
                placeholder='Search NFTs'
                onChangeText={handleSearch}
              />
            </View>
          </View>
          {nftData.length === 0 ?
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: SIZES.font * 2 }}>
              <Text style={{color: COLORS.secondary}}>No item found ...</Text>
            </View>
            : 
            <FlatList 
              data={nftData}
              renderItem={({item}) => <NFTCard data={item} type="favorties"></NFTCard>}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Favorites;