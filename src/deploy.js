import fs from 'fs';

async function main() {
    const MyNFT = await ethers.getContractFactory("MyToken");
    const myNFT = await MyNFT.deploy();
    await myNFT.deployed();
    console.log("MyToken deployed to:", myNFT.address);

    const data = {
      address: myNFT.address,
      abi: MyNFT.interface.format(ethers.utils.FormatTypes.json)
  };

  fs.writeFileSync('src/deployedContract.json', JSON.stringify(data, null, 2));
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  