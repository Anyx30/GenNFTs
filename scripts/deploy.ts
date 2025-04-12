import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Add your deployment code here
  // Example:
  // const Contract = await ethers.getContractFactory("YourContract");
  // const contract = await Contract.deploy();
  // await contract.waitForDeployment();
  // console.log("Contract deployed to:", await contract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 