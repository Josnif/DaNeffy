import React, { useState, useEffect } from "react";
import { useWalletConnect } from '@walletconnect/react-native-dapp';
// import { useNavigation } from '@react-navigation/native';
import { UserData } from '../constants'

const UserWrapper = React.createContext();

export const UserProvider = ({children}) => {
    // const navigation = useNavigation();

    const connector = useWalletConnect();
    const [currentAccount, setCurrentAccount] = useState(false);
    const [user, setUser] = useState(UserData)

    const checkIfConnected = () => {
        if (connector.connected) {
            // console.log(connector.connected);
            setCurrentAccount(connector._accounts[0]);
        } else {
            // connector.connect();
            // setCurrentAccount(connector._accounts[0]);
        }
    }

    const logout = () => {
        checkIfConnected();
        connector.killSession();
    }


    useEffect(() => {
      checkIfConnected();

    }, [])
    

    return (
        <UserWrapper.Provider value={{currentAccount, setCurrentAccount, checkIfConnected, user, logout}}>
            {children}
        </UserWrapper.Provider>
    );
}

export default UserWrapper;