import "react-native-get-random-values"
import "@ethersproject/shims"

import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
const { Network, Alchemy } = require("alchemy-sdk");
import { Text } from "react-native";

const settings = {
    apiKey: "-Zw9_7Gp4v0PUhf_0I1vveViduoQ4J6R",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

const AppAlch = () => {
    const [currentAccount, setCurrentAccount] = useState('');

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            if (accounts.length) {
                console.log(accounts[0]);
                setCurrentAccount(accounts[0]);
            } else {
                console.log('No account found');
            }
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.");
        }
    }
    useEffect(() => {
        const w = ethers.Wallet.createRandom();
        console.log({ walletObject: w, mnemonic: w.mnemonic });

        // connectWallet();
    }, []);

    const latestBlock = alchemy.core.getBlockNumber();
    console.log("The latest block number is", latestBlock);

    return (
        <>
            <Text>Welcome here</Text>
        </>
    );
}

export default AppAlch;