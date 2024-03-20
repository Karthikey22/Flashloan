const hre=require("hardhat");
const {networkConfig}=require("../helper-hardhat-config");

async function main(){
    console.log("FlashloanArbitrage contract deploying ... ");
    const FlashloanArbitrage=await hre.ethers.getContractFactory("FlashLoanArbitrage");
    const flashloanarbitrage=await FlashloanArbitrage.deploy("0x0496275d34753A48320CA58103d5220d394FF77F","0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357","0xda9d4f9b69ac6C22e444eD9aF0CfC043b7a7f53f")

    await flashloanarbitrage.waitForDeployment();
    console.log("FlashloanArbitrage contract address:",flashloanarbitrage.target);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });