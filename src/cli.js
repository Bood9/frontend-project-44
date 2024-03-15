import redlineSync from 'redline-sync';

console.log('Welcome to the Brain Games!');

export const name = redlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);