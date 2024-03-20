// SPDX-License-Identifier: MIT
pragma solidity >=0.8.10 <0.9.0;

import {IERC20} from "@aave/core-v3/contracts/dependencies/openzeppelin/contracts/IERC20.sol";

contract Dex {
    address payable owner;
    IERC20 private dai;
    IERC20 private usdc;

    //exchange rate indexes
    uint256 dexArate=90;
    uint256 dexBrate=100;

    constructor(address _daiaddress,address _usdcaddress){
        owner=payable(msg.sender);
        dai=IERC20(_daiaddress);
        usdc=IERC20(_usdcaddress);

    }

    mapping(address=>uint256)public daibalance;
    mapping(address=>uint256)public usdcbalance;

    //deposit borrowed usdc to this contract
    function depositUSDC(uint256 _amount) external {
        usdcbalance[msg.sender]+= _amount;
        uint256 allowance=usdc.allowance(msg.sender, address(this));
        require(allowance>=_amount,"don't have allowance to execute this txn");
        usdc.transferFrom(msg.sender, address(this), _amount);
    }

    //deposit dai
    function depositDai(uint256 _amount) external {
        daibalance[msg.sender]+=_amount;
        uint256 allowance=dai.allowance(msg.sender, address(this));
        require(allowance>=_amount,"don't have allowance");
        dai.transferFrom(msg.sender, address(this), _amount);
    }

    function buyDai()external{
        uint256 daiToReceive=(usdcbalance[msg.sender]/dexArate*100)*(10**12);
        dai.transfer(msg.sender, daiToReceive);
    }

    function sellDai() external{
        uint256 usdcToReceive=(daibalance[msg.sender]/dexBrate*100)/(10**12);
        usdc.transfer(msg.sender, usdcToReceive);

    }

    function getBalance(address _tokenAddress) external view returns (uint256) {
        return IERC20(_tokenAddress).balanceOf(address(this));
    }

    function withdraw(address _tokenAddress) external onlyOwner {
        IERC20 token = IERC20(_tokenAddress);
        token.transfer(msg.sender, token.balanceOf(address(this)));
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the contract owner can call this function"
        );
        _;
    }

    receive() external payable {}
}