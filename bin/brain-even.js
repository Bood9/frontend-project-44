#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from "../src/cli.js";

const userName = greeting();

 
 console.log('Answer "yes" if the number is even, otherwise answer "no".');

const task = () => {
    
    let a = '';
    if (q % 2 === 0) {
        a='yes';
    } else {
        a='no';
    }
    return [q,a]
};

for (let i = 0; i < 3; i += 1) {
    const step = task();
    console.log(`Question: ${step[0]}`);
    const answer = readlineSync.question('Answer: ');
    
    if (answer === step[1]) {
        console.log('Correct!');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${step[1]}'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
    }
}


