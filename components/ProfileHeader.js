import { View, Text, Image, StatusBar, ImageBackground } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { COLORS, SHADOWS, SIZES, FONTS, assets } from '../constants'
import { shortenAddress } from '../utils';
import { CircleButton } from './Button'


const ProfileHeader = ({ user, address }) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.primary,
    //   height: 400,
      flex: 1,
      marginBottom: SIZES.font
    }}>
        <ImageBackground 
            source={user.banner}  
            resizeMode='cover'
            style={{
                width: '100%', 
                height: 250
            }}
        >

            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginBottom: 30,
                // backgroundColor: COLORS.secondary
            }}>
                <View style={{ width: 65, height: 65, marginBottom: 10 }}>
                    <Image 
                        source={assets.person03}
                        resizeMode='contain'
                        style={{ width: "100%", height: "100%" }}
                    />
                    <Image 
                        source={assets.badge}
                        resizeMode='contain'
                        style={{ position: 'absolute', right: 0, bottom: 0, width: 15, height: 15 }}
                    />
                </View>
                <Text style={{fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white}}> {user.name} </Text>
                <Text style={{fontFamily: FONTS.regular, fontSize: SIZES.font, color: COLORS.white}}>{shortenAddress(address)}</Text>
            </View>
            <CircleButton 
                imgUrl={assets.left}
                left={15}
                top={StatusBar.currentHeight + 10}
                handlePress={() => navigation.goBack()}
            />
        </ImageBackground>
    </View>
  )
}

export default ProfileHeader
