# Foundry + Hardhat Template

A battle-tested template for Ethereum smart contract development using both Foundry and Hardhat.

## Features

- 🔥 Write tests in both Solidity (Foundry) and TypeScript (Hardhat)
- 🚀 Deploy to multiple networks (Ethereum, Polygon, Base, Arbitrum)
- ✅ Contract verification on all networks
- 📝 TypeScript support
- 🔒 Type-safe deployments
- 🛡️ Built-in security tools

## Prerequisites

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Foundry](https://book.getfoundry.sh/getting-started/installation)
- [Node.js](https://nodejs.org/en/) (v18+ recommended)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/0xArchitect/foundry_hardhat_template
cd foundry_hardhat_template

# Install dependencies
npm install

# Install Foundry dependencies
forge install

# Copy environment file
cp .env.example .env
```

## Environment Setup

Add the following variables to your `.env` file:

```env
PRIVATE_KEY=your_private_key_here
ETHERSCAN_API_KEY=your_etherscan_api_key
POLYGONSCAN_API_KEY=your_polygonscan_api_key
BASESCAN_API_KEY=your_basescan_api_key
ARBISCAN_API_KEY=your_arbiscan_api_key

# RPC URLs
ETH_MAINNET_RPC=your_ethereum_mainnet_rpc
ETH_SEPOLIA_RPC=your_sepolia_rpc
POLYGON_MAINNET_RPC=your_polygon_mainnet_rpc
POLYGON_MUMBAI_RPC=your_mumbai_rpc
BASE_MAINNET_RPC=your_base_mainnet_rpc
BASE_SEPOLIA_RPC=your_base_sepolia_rpc
ARB_MAINNET_RPC=your_arbitrum_mainnet_rpc
ARB_SEPOLIA_RPC=your_arbitrum_sepolia_rpc
```

## Development

```bash
# Compile contracts
npm run compile

# Run Hardhat tests
npm test

# Run Foundry tests
forge test

# Run coverage
forge coverage
```

## Deployment

Deploy to various networks using the following commands:

```bash
# Ethereum
npm run deploy:eth        # Mainnet
npm run deploy:eth-test   # Sepolia

# Polygon
npm run deploy:polygon    # Mainnet
npm run deploy:polygon-test # Mumbai

# Base
npm run deploy:base      # Mainnet
npm run deploy:base-test # Sepolia

# Arbitrum
npm run deploy:arb       # Mainnet
npm run deploy:arb-test  # Sepolia
```

## Contract Verification

Verify contracts on block explorers:

```bash
# Ethereum
npm run verify:eth -- <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>      # Mainnet
npm run verify:eth-test -- <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS> # Sepolia

# Polygon
npm run verify:polygon -- <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>    # Mainnet
npm run verify:polygon-test -- <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS> # Mumbai

# Base
npm run verify:base -- <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>      # Mainnet
npm run verify:base-test -- <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS> # Sepolia

# Arbitrum
npm run verify:arb -- <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>       # Mainnet
npm run verify:arb-test -- <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>  # Sepolia
```

## Project Structure

```
.
├── contracts/          # Smart contracts
├── scripts/           # Deployment scripts
├── test/             # Test files (both Hardhat & Foundry)
│   ├── foundry/      # Foundry tests (Solidity)
│   └── hardhat/      # Hardhat tests (TypeScript)
├── .env              # Environment variables
├── .env.example      # Example environment file
├── .gitignore        # Git ignore file
├── foundry.toml      # Foundry configuration
├── hardhat.config.ts # Hardhat configuration
├── package.json      # Node.js dependencies
└── README.md         # Project documentation
```

## Security

- Use [Slither](https://github.com/crytic/slither) for static analysis
- Use [Echidna](https://github.com/crytic/echidna) for fuzzing
- Always follow [best practices](https://consensys.github.io/smart-contract-best-practices/)

## Gas Optimization

This template comes with gas reporting. Run:
```bash
REPORT_GAS=true npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.


