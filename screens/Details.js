import React from 'react';
import { Text, View, SafeAreaView, FlatList, StatusBar, Image } from 'react-native';

import { COLORS, SHADOWS, SIZES, FONTS, assets } from '../constants'
import { CircleButton, RectButton, FocusedStatusBar, DetailsDesc, DetailsBid, SubInfo } from '../components'

const DetailsHeader = ({data, type, navigation}) => (
  <View style={{width: '100%', height: 373}}>
    <Image 
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%"}}
    />
    <CircleButton 
      imgUrl={assets.left}
      left={15}
      top={StatusBar.currentHeight + 10}
      handlePress={() => navigation.goBack()}
    />
      {type != "my-collection" ? 
        <CircleButton 
          imgUrl={assets.heart}
          right={15}
          top={StatusBar.currentHeight + 10}
        />
        : 
        <></>
      }
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  const { type } = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor='transparent' 
        translucent={true}
      />
      {type != "my-collection" ?
        <View style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          paddingVertical: SIZES.font,
          backgroundColor: 'rgba(255,255,255,0.5)'
        }}>
          <RectButton minWidth={170} fontSize={SIZES.large} { ...SHADOWS.dark } />
        </View>
        :
        <></>
      }

      <FlatList 
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} type={type} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 &&
                <Text style={{
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.font,
                  color: COLORS.primary
                }}>
                  Current Bids
                </Text>
              }
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
}

export default Details;