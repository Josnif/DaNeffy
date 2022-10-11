import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, SHADOWS, SIZES, FONTS, assets } from '../constants'

const titleStyle = {
    fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.secondary,
};
const descStyle = {fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.secondary};

const ProfileIcons = ({icon, family}) => {
    if (family == 'MaterialIcons') {
        return <MaterialIcons name={icon} size={24} color={COLORS.primary} />
    } else if (family == 'FontAwesome') { 
        return <FontAwesome name={icon} size={24} color="black" />
    } 
    else {
        return <MaterialCommunityIcons name={icon ?? "account-cog"} size={24} color={COLORS.primary} />
    }
}

const ProfileCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
        style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginHorizontal: SIZES.medium,
            marginVertical: SIZES.base,
            padding: SIZES.font,
            paddingVertical: SIZES.medium,
            flex: 1, flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            ...SHADOWS.light
        }}
        onPress={() => console.log(data.id)}
    >
       <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>
            <ProfileIcons icon={data.icon ?? null} family={data.iconFamily ?? null} />
            <View style={{marginHorizontal: 10}}>
                <Text style={titleStyle}> {data.name} </Text>
                <Text style={descStyle}>{data.desc}</Text>
            </View>
        </View> 
        <MaterialCommunityIcons name="menu-right" size={24} color="black" />
    </TouchableOpacity>

  )
}

export default ProfileCard