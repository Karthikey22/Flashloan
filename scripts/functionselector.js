const ethers=require("ethers");

const depositUSDC="depositUSDC(uint256)";
const depositDai="depositdai(uint256)";
const buydai="buyDAI()";
const selldai="sellDai()";
const getbalance="getBalance(address)";
const withdraw="withdraw(address)";

const depositusdcselector=ethers.id(depositUSDC);
const depostdaiselector=ethers.id(depositDai);
const buydaiselector=ethers.id(buydai);
const selldaiselector=ethers.id(selldai);
const getbalanceselector=ethers.id(getbalance);
const withdrawselector=ethers.id(withdraw);

console.log("DEposit USDC function selector",depositusdcselector);
console.log("deposit dai function selector",depostdaiselector);
console.log("buy dai function selector",buydaiselector);
console.log("sell dai function selector",selldaiselector);
console.log("getbalance function selector",getbalanceselector);
console.log("withdraw function selector",withdrawselector);