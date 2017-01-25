pragma solidity ^0.4.0;

contract auditEntry  {
    // the application that created this audit entry
    address public owner;

    // the patient account accessed
    address public accessed;

    // the account (e.g. user) that access the patient
    address public accessor;

    // when this event occurred - seconds since epic
    uint public timeStamp;

    /* this runs when the contract is executed */
    function auditEntry(address _accessed, address _accessor, uint _timeStamp) public {
        owner = msg.sender;
        accessed = _accessed;
        accessor = _accessor;
        timeStamp = _timeStamp;
    }
}
