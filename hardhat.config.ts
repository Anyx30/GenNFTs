import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import "@openzeppelin/hardhat-upgrades";
import * as dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0000000000000000000000000000000000000000000000000000000000000000";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Ethereum
    mainnet: {
      url: process.env.ETH_MAINNET_RPC || "",
      chainId: 1,
      accounts: [PRIVATE_KEY],
    },
    sepolia: {
      url: process.env.ETH_SEPOLIA_RPC || "",
      chainId: 11155111,
      accounts: [PRIVATE_KEY],
    },
    // Polygon
    polygon: {
      url: process.env.POLYGON_MAINNET_RPC || "",
      chainId: 137,
      accounts: [PRIVATE_KEY],
      gasPrice: "auto",
    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI_RPC || "",
      chainId: 80001,
      accounts: [PRIVATE_KEY],
    },
    // Base
    base: {
      url: process.env.BASE_MAINNET_RPC || "",
      chainId: 8453,
      accounts: [PRIVATE_KEY],
    },
    "base-sepolia": {
      url: process.env.BASE_SEPOLIA_RPC || "",
      chainId: 84532,
      accounts: [PRIVATE_KEY],
    },
    // Arbitrum
    arbitrum: {
      url: process.env.ARB_MAINNET_RPC || "",
      chainId: 42161,
      accounts: [PRIVATE_KEY],
    },
    "arbitrum-sepolia": {
      url: process.env.ARB_SEPOLIA_RPC || "",
      chainId: 421614,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      sepolia: process.env.ETHERSCAN_API_KEY || "",
      polygon: process.env.POLYGONSCAN_API_KEY || "",
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
      base: process.env.BASESCAN_API_KEY || "",
      "base-sepolia": process.env.BASESCAN_API_KEY || "",
      arbitrumOne: process.env.ARBISCAN_API_KEY || "",
      arbitrumSepolia: process.env.ARBISCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org",
        },
      },
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
    ],
  },
};

export default config;
