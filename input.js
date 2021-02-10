 
// Stores the active TCP connection object.
let connection; 
 
 
 /**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

const handleUserInput = () => 
{
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') { // ctrl + c
      process.exit();
    }
    if (key === '\u0077') { // w key
      console.log('up');
      connection.write("Move: up");
    }
    if (key === '\u0064') { // d key
      console.log('right');
      connection.write("Move: right");
    }
    if (key === '\u0073') { //s key
      console.log('down');
      connection.write("Move: down");
    }
    if (key === '\u0061') { // a key
      console.log('left');
      connection.write("Move: left");
    }
    if (key === '\u0066') {
      console.log("Sending FTW!")
      connection.write("Say: FTW!");
    }
  });
};

module.exports = {setupInput};