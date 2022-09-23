import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, SHADOWS, SIZES, FONTS} from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity 
        style={{
            backgroundColor: COLORS.white,
            width: 40,
            height: 40,
            borderRadius: SIZES.extraLarge,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props
        }}
        onPress={handlePress}
    >
      <Image 
        source={imgUrl}
        resizeMode='contain'
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, fontSize, handlePress, inputText="Place a bid", ...props}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold, 
          fontSize: fontSize, 
          color: COLORS.white,
          textAlign: 'center'
        }}
      >{inputText}</Text>
    </TouchableOpacity>
  )
}
