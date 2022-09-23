import { View, Text, Image } from 'react-native'

import { COLORS, SHADOWS, SIZES, FONTS, assets } from '../constants'
import { EthPrice } from './SubInfo'

const DetailsBid = ({ bid }) => {
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: SIZES.base * 2,
      marginTop: SIZES.base
    }}>
      <View style={{width: '20%'}}>
        <Image 
          source={bid.image}
          resizeMode='contain'
          style={{width: 48, height: 48}}
        />
      </View>
      <View style={{width: '50%', textAlign: 'left'}}>
        <Text style={{fontFamily: FONTS.medium, fontSize: SIZES.small, color: COLORS.primary}}>{bid.name}</Text>
        <Text style={{fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary}}>{bid.date}</Text>
      </View>
      
      <View style={{width: '20%'}}>
        <EthPrice price={bid.price} />
      </View>
    </View>
  )
}

export default DetailsBid