//SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

abstract contract IPFSnftsEvents {
    event NftMinted(address indexed owner, uint256 tokenId);
    event NFTRequested(uint256 indexed requestId, address indexed requester);
    event BaseURIUpdated(string newBaseURI);
    event Withdrawal(address indexed owner, uint256 amount);
    event VRFRequestFailed(uint256 requestId, address requester);
}
