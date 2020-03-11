const { connect } = require('./client');
const net = require('net');
const connection = connect();

console.log('Connecting ...');


module.exports = { connect };