// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract HelloWeb3 {
    address public owner;
    string public message;

    constructor(string memory initialMessage) {
        owner = msg.sender;
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        require(msg.sender == owner, "Only owner can change the message");
        message = newMessage;
    }
}