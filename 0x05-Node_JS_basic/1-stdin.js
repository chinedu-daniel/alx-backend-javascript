#!/usr/bin/node
/**
 * using process stdin
 */

// Import the required process module
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for input from the user
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});