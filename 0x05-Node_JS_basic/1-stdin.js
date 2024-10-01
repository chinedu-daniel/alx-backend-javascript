#!/usr/bin/node
/**
 * using process stdin
 */

// Import the required process module
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for input from the user
process.stdin.on('data', (data) => {
  const inputName = data.toString().trim(); // Convert input to string and trim any extra spaces
  process.stdout.write(`Your name is: ${inputName}\n`);

  // Close the input stream and print the closing message
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
