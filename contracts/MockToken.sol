pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';
contract MockToken is ERC20Burnable {
    constructor (uint256 initialSuppply) public ERC20("mock","mock") {
        _mint(msg.sender, initialSuppply);
    }
}
