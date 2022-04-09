import React from 'react';
import { GameLine, StartCircle } from '../constants/images';
function Welcome() {

    return (
        <>
            <div className="gametext">
                <h1>Mathematics Game</h1>
            </div>
            <div className='gameline'>
                <GameLine />
            </div>

            <div className ='info'>
                <h2>Total Point: </h2>
                <h2>Total Question: </h2>
                <h2>Correct Answers: </h2>
            </div>
            <h2 className='start'>Start</h2>
            <StartCircle />
            <div>
                
            </div>
        </>
    );
}

export default Welcome;
