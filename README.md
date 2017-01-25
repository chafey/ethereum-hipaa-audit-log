# ethereum-hipaa-audit-log
A prototype implementation of a blockchain HIPAA audit log using ethereum
and meteor

Concept
-------

A HIPAA audit log keeps track of which users access which patients at what time.  
Implementing this functionality using blockchain is interesting because:

1. Blockchain is immutable - once an audit record is stored, it cannot be
   removed or changed.   
2. Blockchain is built on public key cryptography.  Users and patients could
   have their own unique public keys on the blockchain that can be referenced
   by the audit log without revealing the actual users identity or any PHI.
3. Blockchain is accessible - the audit records can be easily accessed by
   anonymous

This prototype uses ethereum for the blockchain implementation and has a
smart contract that contains an audit log entry (see contracts/auditEntry.sol).  
The contract

Pre-requisites
--------------

1) Setup a private ethereum network from here: https://github.com/chafey/ethereum-private-network

2) Meteor

How to run
----------

Make sure your ethereum private test network is running

Start the meteor application:

> cd hipaaAuditLog

> meteor

Open your web browser to localhost:3000

Click "Sign in" and use the credentials:

username: test@test.com

password: test

You should now see a patient record for "John Doe with MRN 1234".  
Every time you click the record, the client will call a meteor method on the
server side which will create a new auditLog transaction in your ethereum
private test network blockchain:
```
I20170125-08:51:15.050(-6)? patientViewed  1234
I20170125-08:51:15.052(-6)? Adding auditEntry to ethereum
I20170125-08:51:22.903(-6)? Contract mined! address: 0x71cfbe86bac365e334a80fd1e49ab253a05d4df4 transactionHash: 0x4103ba897b342b6679c812df7cecae42d6d081516ecc7b80c80597720f07cf40
```

What just happened?
-------------------

Both the patient and the user have an account on the ethereum test network and
the address of those accounts (the public key) are stored in the hipaa audit
log entry.

Ideas for the future
--------------------

1. Build a blockchain hipaa audit log index and browser.  Iterate over the
   audit entries in the blockchain and build up a local indexed
   databases that lets a user run reports such as
   "who are the users that accessed this patient", "which patients did this user
   access" and "what audit entries occurred during this time period".
2. Create a Patient contract and store HIPAA audit logs in it.  This would make
   it easier to find out who accessed a given patient.  It may also reduce
   the storage required.  New entries would fire events that could be listened
   to.
3. Create a User contract and store HIPAA Audit logs in it.  This would make
   it easier to find out which patients a given user accessed.  It may also
   reduce the storage required.  New entries would fire events that could be
   listened to.
