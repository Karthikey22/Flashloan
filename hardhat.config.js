require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks:{
    sepolia:{
      url: process.env.INFURA_ENDPOINT,
      accounts:[process.env.PRIVATE_KEY],
      saveDeployments: true,
      chainId: 11155111
    }
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
        1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    player: {
        default: 1,
    },
  },
  solidity: {
    compilers: [
        {
            version: "0.8.7",
        },
        {
            version: "0.8.10",
        },
    ],
  },
mocha: {
    timeout: 500000, // 500 seconds max for running tests
  },
};
