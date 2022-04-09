/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import React, { useState, useEffect } from 'react';
import { Person, AnswerCircle } from '../constants/images';

function Game() {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [firstWrongAnswer, setFirstWrongAnswer] = useState(0);
    const [secondWrongAnswer, setSecondWrongAnswer] = useState(0);
    const [questionString, setQuestionString] = useState();
    const [answerReport, setAnswerReport] = useState([]);
    const [questionCounter, setQuestionCounter] = useState(1);

    useEffect(() => {
        let question = getMultipliedNumber();

        setCorrectAnswer(question.array[0]);

        question.array = question.array.sort((_a, _b) => 0.5 - Math.random());

        setQuestionString(question.questionString);
        setFirstWrongAnswer(question.array[1]);
        setSecondWrongAnswer(question.array[2]);
    }, [questionCounter])

    //creates integers between inclusive at both the minimum and the maximum
    const getRandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // eslint-disable-next-line no-unused-vars

    function getMultipliedNumber() {

        let result = 0;
        let wrongNumberSmall = 0;
        let wrongNumberBig = 0;

        let x = getRandomNumber(1, 10);
        let y = getRandomNumber(1, 10);

        let questionString = `${x} x ${y} = ?`;

        result = x * y;
        wrongNumberSmall = x * (y - 1);
        wrongNumberBig = x * (y + 1);

        let array = [result, wrongNumberSmall, wrongNumberBig];

        return { array, questionString };
    }


    const handleAnswerCircleClick = async (element) => {
        const answer = element.innerHTML;

        console.log(answer);
        console.log(correctAnswer);

        let isCorrect = Boolean(answer == correctAnswer);
        console.log(isCorrect);

        isCorrect ? handleCorrectAnswer() : handleWrongAnswer();

        await delay(200);

        handleNext(questionString, answer, isCorrect);

    };

    function handleCorrectAnswer() {
        document.querySelector('body').style = 'background-color:green';
    }

    function handleWrongAnswer() {
        document.querySelector('body').style = 'background-color:red';
    }

    function handleNext(questionString, answer, isCorrect) {
        setAnswerReport([...answerReport, `${questionString.slice(0, -2)} ${answer} ${isCorrect ? '✓' : '☓'}`]);
        document.querySelector('body').style = 'background: #2D2D2D;';


        if (questionCounter == 10) {
            location.replace('/result');
        } else {
            setQuestionCounter(questionCounter + 1);
        }
    }


    //  console.log(correctAnswer, wrongAnswerSmall, wrongAnswerBig);

    return (
        <>
            <div className='board-container'>
                <Person width='600' height='550' />
                <h2>
                    {questionString}
                </h2>
            </div>
            <div className='answers-container'>
                <div className='answer answer-one' onClick={() => handleAnswerCircleClick(document.getElementById('q1'))}>
                    <h2 id="q1">
                        {correctAnswer}
                    </h2>
                    <AnswerCircle />
                </div>
                <div className='answer answer-two' onClick={() => handleAnswerCircleClick(document.getElementById('q2'))}>
                    <h2 id="q2">
                        {firstWrongAnswer}
                    </h2>
                    <AnswerCircle />
                </div>
                <div className='answer answer-three' onClick={() => handleAnswerCircleClick(document.getElementById('q3'))}>
                    <h2 id="q3">
                        {secondWrongAnswer}
                    </h2>
                    <AnswerCircle />
                </div>
            </div>
        </>
    );
}

export default Game;