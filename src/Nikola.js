import readlineSync from 'readline-sync';
const round = 3;
export const playGame = (rules, generateRound) => {
     
        console.log('Welcome to the Brain Games!');
        const name = readlineSync.question('May I have your name? ');
        console.log(`Hello, ${name}!`);
        console.log(rules); 
        for (let i = 0; i < round; i += 1) {
            const [question, correctAnswer] = generateRound();
            console.log(`Question: ${question}`);
            const answer = readlineSync.question('Answer: ');
            
            if (answer === correctAnswer) {
                console.log('Correct!');
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
                console.log(`Let's try again, ${name}!`);
                break;
                
            }
            if (i === round - 1) {
                console.log(`Congratulations, ${name}!`);
            }
        }
        
      
   
   
    };
    
    export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);


