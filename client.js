const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  }
  // , () => {
  //   console.log('connected to server!');
  //   conn.write("Name: MAG");
  // } 
  );
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('connected to server!')
    conn.write("Name: MAG");
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
module.exports = connect;