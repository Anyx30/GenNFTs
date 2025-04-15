export const IPFSnfts = {
  address: '0x6895A2d6F6c465cB382b1009059CE03fA1244398',
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_vrfCoordinatorV2',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: '_keyHash',
          type: 'bytes32',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'IPFSnfts__ExceededMaxSupply',
      type: 'error',
    },
    {
      inputs: [],
      name: 'IPFSnfts__IncorrectPrice',
      type: 'error',
    },
    {
      inputs: [],
      name: 'IPFSnfts__InvalidTokenId',
      type: 'error',
    },
    {
      inputs: [],
      name: 'IPFSnfts__VRFRequestFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'IPFSnfts__WithdrawalFailed',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'string',
          name: 'newBaseURI',
          type: 'string',
        },
      ],
      name: 'BaseURIUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'NftMinted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'requestId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'requester',
          type: 'address',
        },
      ],
      name: 'NFTRequested',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'requestId',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'requester',
          type: 'address',
        },
      ],
      name: 'VRFRequestFailed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Withdrawal',
      type: 'event',
    },
    {
      inputs: [],
      name: 'MAX_SUPPLY',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'PRICE',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'mintNft',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'requestId',
          type: 'uint256',
        },
        {
          internalType: 'uint256[]',
          name: 'randomWords',
          type: 'uint256[]',
        },
      ],
      name: 'rawFulfillRandomWords',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 's_baseURI',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 's_tokenCounter',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'newBaseURI',
          type: 'string',
        },
      ],
      name: 'setBaseURI',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newSubscriptionId',
          type: 'uint256',
        },
      ],
      name: 'setSubscriptionId',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'tokenURI',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'withdraw',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
} as const 