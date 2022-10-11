import React, { useState, useEffect } from "react";
import { useWalletConnect } from '@walletconnect/react-native-dapp';
// import { useNavigation } from '@react-navigation/native';

const UserWrapper = React.createContext();

export const UserProvider = ({children}) => {
    // const navigation = useNavigation();

    const connector = useWalletConnect();
    const [currentAccount, setCurrentAccount] = useState(false);

    const checkIfConnected = () => {
        if (connector.connected) {
            // console.log(connector.connected);
            setCurrentAccount(connector._accounts[0]);
        } else {
            // connector.connect();
            // setCurrentAccount(connector._accounts[0]);
        }
    }


    useEffect(() => {
      checkIfConnected();

    }, [])
    

    return (
        <UserWrapper.Provider value={{currentAccount, setCurrentAccount}}>
            {children}
        </UserWrapper.Provider>
    );
}

export default UserWrapper;