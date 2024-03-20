// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {


  console.log("deploying...");
  const FlashLoan= await hre.ethers.getContractFactory("FlashLoan");
  const flashloan= await FlashLoan.deploy("0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A");
  // 0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A

  await flashloan.waitForDeployment();
  console.log("Deployed contract address : ", flashloan.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
