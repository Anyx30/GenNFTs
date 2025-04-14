//SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./helpers/Errors.sol";
import "./helpers/Events.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {VRFConsumerBaseV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {IVRFCoordinatorV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/interfaces/IVRFCoordinatorV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";

contract IPFSnfts is ERC721URIStorage,
    VRFConsumerBaseV2Plus,  
    IPFSnftsErrors,
    IPFSnftsEvents,
    ReentrancyGuard {

    // Chainlink VRF variables
    IVRFCoordinatorV2Plus private vrfCoordinator;
    bytes32 private keyHash;
    uint256 private subscriptionId;
    uint32 private callbackGasLimit = 1000000;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;

    // IPFSnfts variables
    uint256 public s_tokenCounter;
    uint256 public constant MAX_SUPPLY = 19;
    string public s_baseURI;
    uint256 public constant PRICE = 0.0001 ether;

    mapping(uint256 => address) public requestToSender;
    mapping(uint256 => uint256) public requestToTokenId;
    mapping(uint256 => bool) public tokenIDMinted;

    constructor(address _vrfCoordinatorV2,
        bytes32 _keyHash)
            ERC721("METABORONG", "MB")
            VRFConsumerBaseV2Plus(_vrfCoordinatorV2) {

        vrfCoordinator = IVRFCoordinatorV2Plus(_vrfCoordinatorV2);
        keyHash = _keyHash;
        s_baseURI = "https://ipfs.io/ipfs/bafybeicmvgwofwf5rz2kpklrulhlxqntltmmilvlx6v46squr46nr2y5j4";
    }

    function mintNft() public payable nonReentrant returns (uint256) {
        if (s_tokenCounter >= MAX_SUPPLY) revert IPFSnfts__ExceededMaxSupply();
        if (msg.value < PRICE) revert IPFSnfts__IncorrectPrice();

        uint256 requestId = vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: keyHash,
                subId: subscriptionId,
                requestConfirmations: REQUEST_CONFIRMATIONS,
                callbackGasLimit: callbackGasLimit,
                numWords: NUM_WORDS,
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({
                        nativePayment: false
                    })
                )
            }) 
        );  

        if (requestId == 0) {
            emit VRFRequestFailed(requestId, msg.sender);
            revert IPFSnfts__VRFRequestFailed();
        }

        requestToSender[requestId] = msg.sender;
        s_tokenCounter++;
        emit NFTRequested(requestId, msg.sender);
        return requestId;
    }

    function fulfillRandomWords(uint256 requestId, uint256[] calldata randomWords) internal override {
        address nftOwner = requestToSender[requestId];
        uint256 selectedTokenId = selectRandomAvailableToken(randomWords[0]);
        
        tokenIDMinted[selectedTokenId] = true;
        _safeMint(nftOwner, selectedTokenId);
        
        delete requestToSender[requestId];
        emit NftMinted(nftOwner, selectedTokenId);
    }

    function selectRandomAvailableToken(uint256 randomness) internal view returns (uint256) {
        // Returns 1-19
        uint256 randomIndex = (randomness % MAX_SUPPLY) + 1;
        
        if (tokenIDMinted[randomIndex]) {
            // Search in order from randomIndex to end, then from start to randomIndex
            for (uint256 i = 1; i <= MAX_SUPPLY; i++) {
                uint256 newIndex = ((randomIndex + i - 1) % MAX_SUPPLY) + 1;
                if (!tokenIDMinted[newIndex]) {
                    return newIndex;
                }
            }
            revert("All tokens are minted");
        }
        return randomIndex;
    }

    // Override tokenURI function to return IPFS URI
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        if (tokenId < 1 || tokenId > MAX_SUPPLY) revert IPFSnfts__InvalidTokenId();
        return string(abi.encodePacked(s_baseURI, '/', Strings.toString(tokenId), '.json'));
    }

    function setSubscriptionId(uint256 newSubscriptionId) external onlyOwner {
        subscriptionId = newSubscriptionId;
    }

    // Withdraw funds
    function withdraw() external onlyOwner nonReentrant {
        uint256 balance = address(this).balance;
        (bool success, ) = payable(owner()).call{value: balance}("");
        if (!success) revert IPFSnfts__WithdrawalFailed();
        emit Withdrawal(owner(), balance);
    }

    function setBaseURI(string memory newBaseURI) external onlyOwner {
        s_baseURI = newBaseURI;
        emit BaseURIUpdated(newBaseURI);
    }

}
