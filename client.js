const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('connected to server!')
    conn.write("Name: MG");
  });

  conn.on('connect', () => {
    //conn.write("Move: up");
      // setInterval(() => {
      //   conn.write("Move: left");
      // }, 50);
    // conn.write("Move: left");
    // conn.write("Move: down");
    // conn.write("Move: down");
    // conn.write("Move: right");
    // conn.write("Move: right");
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('end', () => {
    console.log('disconnected from server');
  });


  return conn;
}

// conn.on('data', (data) => {
//   console.log('Message from client: ', data)
// });


//console.log('Connecting ...');
module.exports = {connect};