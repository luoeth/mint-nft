import React, { useState } from 'react';
import { ethers } from 'ethers';
import MyToken from '/artifacts/contracts/MyNFT.sol/MyToken.json';
import deployedContract from './deployedContract.json';


const Home = () => {
    const [mintedTokens, setMintedTokens] = useState([]);
    const [mintCount, setMintCount] = useState(0);
    const contractAddress = deployedContract.address;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, MyToken.abi, signer);

    const mintNFT = async () => {
        try {
            const tx = await contract.mintToken({ value: ethers.utils.parseEther("1.0") });
            await tx.wait();
            
            const newMintCount = mintCount + 1;
            setMintCount(newMintCount);
            setMintedTokens([...mintedTokens, newMintCount]);
        } catch (err) {
            console.error("Minting error: ", err);
        }
    };

    return (
        <div>
            <h1>Mint your NFT</h1>
            <button onClick={mintNFT}>Mint</button>
            <div>
                <h2>Minted NFTs:</h2>
                <ul>
                    {mintedTokens.map((tokenId, index) => (
                        <li key={index}>
                            NFT ID: {tokenId} 
                            <br />
                            <img src={`img/0 (${tokenId}).jpg`} alt={`NFT ${tokenId}`} width="200" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
