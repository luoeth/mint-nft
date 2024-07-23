const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken contract", function () {
    let MyToken;
    let myToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {
        MyToken = await ethers.getContractFactory("MyToken");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        myToken = await MyToken.deploy();
        await myToken.deployed();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await myToken.owner()).to.equal(owner.address);
        });
    });

    describe("Transactions", function () {
        it("Should mint token correctly", async function () {
            await myToken.connect(addr1).mintToken(1, { value: ethers.utils.parseEther("1") });
            expect(await myToken.balanceOf(addr1.address)).to.equal(1);
        });

        it("Should fail if not enough ether is sent", async function () {
            await expect(
                myToken.connect(addr1).mintToken(1, { value: ethers.utils.parseEther("0.5") })
            ).to.be.revertedWith("wrong amount sent");
        });

        it("Should fail if minting more than maxPerWallet", async function () {
            await myToken.connect(addr1).mintToken(5, { value: ethers.utils.parseEther("5") });
            await expect(
                myToken.connect(addr1).mintToken(1, { value: ethers.utils.parseEther("1") })
            ).to.be.revertedWith("mints per wallet exceeded");
        });
    });
});

