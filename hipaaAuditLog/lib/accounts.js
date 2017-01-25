import { Meteor } from 'meteor/meteor';

// disable account creation since this prototype requires users to have
// a public key to work (we don't want new users created without public keys)
Accounts.config({
  forbidClientAccountCreation : true
});
