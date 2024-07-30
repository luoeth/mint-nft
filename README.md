# [Hardhat](https://hardhat.org/) + Yarn

1. 安裝Yarn：如果你還沒有安裝Yarn，可以用以下命令進行安裝：
   > npm install -g yarn

2. 安裝依賴：使用Yarn安裝其他需要的依賴。例如，你可能需要安裝一些Hardhat插件：
   > yarn add --dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers @openzeppelin/contracts

3. 編寫和編譯智能合約:
   > yarn hardhat compile

4. 啟動本地節點：如果你需要一個本地的Ethereum節點來進行開發，可以啟動Hardhat內建的節點：
   > yarn hardhat node

5. 部署腳本：
   > yarn hardhat run src\deploy.js --network localhost
> [!NOTE]
> yarn run v1.22.22.  
> $ C:\Users\Luo\Desktop\myapp\node_modules\.bin\hardhat run src\deploy.js --network localhost.  
> MyToken deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3.  
> Done in 2.61s.  
