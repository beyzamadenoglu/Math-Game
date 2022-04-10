import React from 'react';
import { GameLine, StartCircle } from '../constants/images';
import { useNavigate } from 'react-router-dom';


function Welcome() {
    const totalScore = localStorage.getItem('totalScore');
    const totalQuestions = localStorage.getItem('totalQuestions');
    const correctAnswers = localStorage.getItem('correctAnswers');

    const navigate = useNavigate();
    return (
        <>  <div className ="welcome">
            <div className="gametext">
                <h1>Mathematics Game</h1>
            </div>
            <div className='gameline'>
                <GameLine />
            </div>

            <div className='info'>
                <h2>Total Point: {totalScore} </h2>
                <h2>Total Question: {totalQuestions} </h2>
                <h2>Correct Answers: {correctAnswers} </h2>
            </div>
            <h2 onClick={() => navigate('/game')} className="start pointer">
                            Start
            </h2>
            <StartCircle />
            <div>

            </div>
        </div>
        </>
    );
}

export default Welcome;
