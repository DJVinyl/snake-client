/**
 * Establishes connection with the game server
 */
const connect = require('./client');
console.log('Connecting ...');
connect();

//get userInput
const setUpInput = require('./input');
setUpInput();



