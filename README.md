# :construction_worker: [Hardhat](https://hardhat.org/) + Yarn

1. 安裝Yarn：如果你還沒有安裝Yarn，可以用以下命令進行安裝：
   > npm install -g yarn

2. 安裝依賴：使用Yarn安裝其他需要的依賴。例如，你可能需要安裝一些Hardhat插件：
   > yarn add --dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers @openzeppelin/contracts

3. 編寫和編譯智能合約:
   > yarn hardhat compile

4. 啟動本地節點：如果你需要一個本地的Ethereum節點來進行開發，可以啟動Hardhat內建的節點：
   > yarn hardhat node


5. 部署腳本(另外開一個Terminal執行)：
   > yarn hardhat run src\deploy.js --network localhost

6. 啟動vite:
   >yarn dev 

執行成功後會像是
> [!NOTE]
> VITE v5.3.4  ready in 1035 ms  
> ➜  Local:   http://localhost:5173/  
> ➜  Network: use --host to expose  
> ➜  press h + enter to show help

# [Metamask](https://metamask.io/)錢包
# 1. add a network    
![](https://github.com/luoeth/mint-nft-token/blob/main/add%20a%20network.png)

# 2.匯入帳號(使用yarn hardhat node後提供的帳號做匯入)  
![](https://github.com/luoeth/mint-nft-token/blob/main/%E5%8C%AF%E5%85%A5%E5%B8%B3%E8%99%9F.png)  

# 3.與網站進行連結，點擊mint
![](https://github.com/luoeth/mint-nft-token/blob/main/%E9%BB%9E%E6%93%8Amint.png)  

# 4.First NFT  
![](https://github.com/luoeth/mint-nft-token/blob/main/first%20nft.png)
