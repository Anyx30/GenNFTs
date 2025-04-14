import { ethers } from "hardhat";
import hre from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Base Sepolia Testnet VRF Coordinator address
    const vrfCoordinatorV2Plus = "0x5C210eF41CD1a72de73bF76eC39637bB0d3d7BEE";
    // Base Sepolia gas lane (keyHash)
    const keyHash = "0x9e1344a1247c8a1785d0a4681a27152bffdb43666ae5bf7d14d24a5efd44bf71";

    console.log("Deploying IPFSnfts contract...");
    const IPFSnfts = await ethers.getContractFactory("IPFSnfts");
    const ipfsNfts = await IPFSnfts.deploy(
        vrfCoordinatorV2Plus,
        keyHash
    );

    await ipfsNfts.waitForDeployment();
    const contractAddress = await ipfsNfts.getAddress();
    console.log("IPFSnfts deployed to:", contractAddress);

    // Wait for 5 blocks for better confirmation
    console.log("Waiting for 5 block confirmations...");
    await ipfsNfts.deploymentTransaction()?.wait(5);

    // Verify the contract
    console.log("Verifying contract...");
    try {
        await hre.run("verify:verify", {
            address: contractAddress,
            constructorArguments: [
                vrfCoordinatorV2Plus,
                keyHash
            ],
        });
        console.log("Contract verified successfully!");
    } catch (error) {
        console.error("Verification failed:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
