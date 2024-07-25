// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyToken is ERC721 {
    uint256 public totalMints = 0;
    uint256 public mintPrice = 1 ether;
    uint256 public maxSupply = 10000;
    uint256 public maxPerWallet = 100;
    mapping(address => uint256) public walletMints;
    mapping(uint256 => bool) public mintedIds; 

    constructor() ERC721("MyToken", "MTK") {}

    function safeMint(address to, uint256 tokenId) internal {
        _safeMint(to, tokenId);
    }

    function mintToken() public payable {
        require(msg.value == mintPrice, "wrong amount sent");
        require(walletMints[msg.sender] + 1 <= maxPerWallet, "mints per wallet exceeded");
        require(totalMints < maxSupply, "max supply reached");

        uint256 newTokenId = totalMints;
        require(!mintedIds[newTokenId], "token ID already minted");

        walletMints[msg.sender] += 1;
        mintedIds[newTokenId] = true;
        safeMint(msg.sender, newTokenId);
        totalMints++;
    }

    function getMyWalletMints() public view returns (uint256) {
        return walletMints[msg.sender];
    }
}
