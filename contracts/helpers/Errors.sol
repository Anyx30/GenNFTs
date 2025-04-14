//SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

abstract contract IPFSnftsErrors {
    error IPFSnfts__ExceededMaxSupply();
    error IPFSnfts__IncorrectPrice();
    error IPFSnfts__NonexistentToken();
    error IPFSnfts__InvalidTokenId();
    error IPFSnfts__VRFRequestFailed();
    error IPFSnfts__WithdrawalFailed();
}
