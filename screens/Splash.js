import React, { useState, useRef } from 'react';
import {Text, View, Dimensions, Image, SafeAreaView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native'
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';

import { FocusedStatusBar, RectButton } from '../components';
import { COLORS, assets } from '../constants';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);

const data = [
  {
    title: "Phone",
    description: "iPhone 6 on the table",
    source: assets.splash01,
  },
  {
    title: "Phone",
    description: "iPhone 6 on the table",
    source: assets.splash01,
    // source:
    //   "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },
  {
    title: "Old building",
    description: "Location: Germany",
    source: assets.splash02,
    // source:
    //   "https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
  },
];

const renderItem = ({item}) => {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: 'white',
        height: '90%'
    }}>
      <Image 
        source={item.source} 
        style={{width: '100%', height: 500, alignItems: 'center',}}
        resizeMode='contain'
     />
      <Text style={{marginVertical: 0, fontSize: 20, fontWeight: 'bold'}}>
        {item.title}
      </Text>
      <Text style={{marginVertical: 5, fontSize: 20, fontWeight: 'bold'}}>
        {item.description}
      </Text>
    </View>
  );
};

const Splash = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const connector = useWalletConnect();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{marginVertical: 0, height: '90%'}}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          containerStyle={{justifyContent: 'flex-start'}}
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 20,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: '#F4BB41',
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: 'black',
            width: 10,
            height: 6,
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
      <View style={{marginVertical: 0, height: '10%'}}>
      {(!connector.connected) ?
        <RectButton 
          minWidth={40} 
          fontSize={20} 
          height={50}
          position= 'absolute'
          width={150}
          top={10}
          right={10}
          handlePress={() => navigation.navigate('CryptoAuth')} 
          inputText="Next" 
          backgroundColor={COLORS.primary}
        />
        :
        <RectButton 
          minWidth={40} 
          fontSize={20} 
          height={50}
          position= 'absolute'
          width={300}
          top={10}
          right={10}
          handlePress={() => navigation.navigate('App')} 
          inputText="Continue to dashboard" 
          backgroundColor={COLORS.primary}
        />
      }
      </View>
    </SafeAreaView>
  );
};
export default Splash;