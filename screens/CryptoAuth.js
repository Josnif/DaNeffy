import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';

import { FocusedStatusBar, RectButton } from '../components';
import { COLORS, SIZES, FONTS, assets } from '../constants';

const CryptoAuth = () => {
    const navigation = useNavigation();

    const connector = useWalletConnect();
    if (!connector.connected) {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
                <FocusedStatusBar backgroundColor={COLORS.primary} />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text 
                        style={{
                            color: COLORS.primary, 
                            fontSize: 35, 
                            fontWeight: 'bold',
                            marginBottom: 20,
                        }}
                    >
                        Welcome To DaNeffy
                    </Text>
                    <RectButton 
                        minWidth={200} 
                        fontSize={20} 
                        height={50}
                        handlePress={() => connector.connect()} 
                        inputText="Connect Wallet" 
                        backgroundColor={COLORS.primary}
                    />
                </View>
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
                <FocusedStatusBar backgroundColor={COLORS.primary} />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text 
                        style={{
                            color: COLORS.primary, 
                            fontSize: 35, 
                            fontWeight: 'bold',
                            marginBottom: 20,
                        }}
                    >
                        Welcome
                    </Text>
                    <RectButton 
                        minWidth={200} 
                        fontSize={20} 
                        height={50}
                        // handlePress={() => connector.killSession()} 
                        handlePress={() => navigation.navigate("App")} 
                        inputText="Connected! Continue..." 
                        backgroundColor={COLORS.primary}
                    />
                </View>
            </SafeAreaView>
        )
        
    }

}

export default CryptoAuth;