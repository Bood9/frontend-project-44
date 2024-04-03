#!/usr/bin/env node
import { playGame, getRandomNumber } from '../src/Nikola.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const generateRound = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
};

const startBrainEven = () => {
    playGame(rules, generateRound);
};
startBrainEven();
