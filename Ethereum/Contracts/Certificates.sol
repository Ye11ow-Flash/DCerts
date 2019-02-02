pragma solidity ^0.4.25;

contract Certificate{
    
    mapping(address => string[]) certificates;
    
    function upload(string certificate) public{
        certificates[msg.sender].push(certificate);
    }
}