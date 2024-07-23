import React, { useState } from 'react';
import { ethers } from 'ethers';
import deployedContract from './deployedContract.json'; // 假設該文件在 src 目錄中

const Home = () => {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);

    const contractAddress = deployedContract.address;
    const contractABI = deployedContract.abi;

    const connectWallet = async () => {
        if (window.ethereum) {
            const newProvider = new ethers.providers.Web3Provider(window.ethereum);
            const newSigner = newProvider.getSigner();
            setProvider(newProvider);
            setSigner(newSigner);

            const newContract = new ethers.Contract(contractAddress, contractABI, newSigner);
            setContract(newContract);
        } else {
            console.log('Please install MetaMask');
        }
    };

    const mintToken = async () => {
        if (contract) {
            try {
                const tx = await contract.mintToken(1, { value: ethers.utils.parseEther("1") });
                await tx.wait();
                console.log('Mint successful');
            } catch (error) {
                console.log('Error minting token:', error);
            }
        } else {
            console.log('Contract not connected');
        }
    };

    return (
        <div>
            <button onClick={connectWallet}>
                Connect Wallet
            </button>
            <button onClick={mintToken}>
                Mint
            </button>
        </div>
    );
};

export default Home;
