/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import React, { useState, useEffect } from 'react';
import { Person, AnswerCircle } from '../constants/images';
import Result from '../pages/Result';
import { Link, useNavigate } from 'react-router-dom';

import '../App.css'
import { useTour } from '../contexts/tour';

function Game() {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const navigate = useNavigate();

    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [firstWrongAnswer, setFirstWrongAnswer] = useState(0);
    const [secondWrongAnswer, setSecondWrongAnswer] = useState(0);
    const [questionString, setQuestionString] = useState();
    const [answerReport, setAnswerReport] = useState([]);
    const [questionCounter, setQuestionCounter] = useState(1);

    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);


    const { increaseTour, tourNumber, setTourNumber } = useTour();


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
        let isCorrect = Boolean(answer == correctAnswer);
        setTotalQuestions(totalQuestions + 1);

        isCorrect ? handleCorrectAnswer(answer) : handleWrongAnswer();

        await delay(150);

        handleNext(questionString, answer, isCorrect);

    };

    function handleCorrectAnswer(answer) {
        document.querySelector('body').style = 'background-color:green';

        let score = Math.ceil(Math.sqrt(answer));
        console.log('answer;', answer);
        console.log('score;', score);
        console.log('--------------------------------------------------------');

        setTotalScore(totalScore + score);
        setCorrectAnswers(correctAnswers + 1);
    }

    function handleWrongAnswer() {
        document.querySelector('body').style = 'background-color:red';
    }


    function setToLocalStorage() {
        console.log('setToLocalStorage');

        //bu şekilde mi localstoragea eklicez ?
        let _correctAnswer = localStorage.getItem('correctAnswers') ? (localStorage.getItem(Number('correctAnswers'))) : [];
        _correctAnswer += correctAnswers;
        localStorage.setItem('correctAnswers', _correctAnswer);


        let _totalQuestion = localStorage.getItem('totalQuestions') ? (localStorage.getItem(Number('totalQuestions'))) : [];
        _totalQuestion += totalQuestions;
        localStorage.setItem('totalQuestions', _totalQuestion);


        let _totalScores = localStorage.getItem('totalScore') ? (localStorage.getItem(Number('totalScore'))) : [];
        _totalScores += totalScore;
        localStorage.setItem('totalScore', _totalScores);
    }

    function handleNext(questionString, answer, isCorrect) {
        setAnswerReport([...answerReport, `${questionString.slice(0, -2)} ${answer} ${isCorrect ? '✓' : '☓'}`]);
        document.querySelector('body').style = 'background: #2D2D2D;';

        if ((questionCounter % 10) == 0) {
            setToLocalStorage();
            increaseTour(questionCounter);
            navigate('/result');
        } else {
            setQuestionCounter(questionCounter + 1);
        }
    }

    //  console.log(correctAnswer, wrongAnswerSmall, wrongAnswerBig);

    return (
        <>
            <div className='container'>
                <div className='board-container'>
                    <Link to='/result'>asdfadfaf</Link>
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
            </div>
        </>
    );
}

export default Game;