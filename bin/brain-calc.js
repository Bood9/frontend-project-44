#!/usr/bin/env node
import { playGame, getRandomNumber } from '../src/Nikola.js';

const rules = 'What is the result of the expression?';


const correctAnswer = (num1, operator, num2) => {
    switch (operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            return null;
          }
        };
        
        const generateRound = () => {
          const mathOperator = ['+', '-', '*'];
          const getMathOperator = mathOperator[getRandomNumber(0, mathOperator.length - 1)];
          const number1 = getRandomNumber(1, 50);
          const number2 = getRandomNumber(1, 50);
          const question = `${number1} ${getMathOperator} ${number2}`;
          const getCorrectAnswer = correctAnswer(number1, getMathOperator, number2).toString();
          return [question, getCorrectAnswer];
        };
        
        const startBrainCalc = () => {
          playGame(rules, generateRound);
        };
        
        
        startBrainCalc();