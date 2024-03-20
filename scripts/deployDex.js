const hre=require("hardhat");

async function main(){

    console.log("Deploying Dex contract....");
    const Dex=await hre.ethers.getContractFactory("Dex");
    const dex=await Dex.deploy("0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357","0xda9d4f9b69ac6C22e444eD9aF0CfC043b7a7f53f");

    await dex.waitForDeployment();
    console.log("Dex contract address:",dex.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});