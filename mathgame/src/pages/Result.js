import React from 'react';
import { GameLine } from '../constants/images';
function Result() {

    return (
        <>
            <div className ='container'>
                <div>
                    <h1 className='final-page'>Final</h1>
                    <GameLine width="400" height = "8"/>
                    <h2>Questions</h2>
                    <h2>Correct Answers</h2>
                    <h2>Restart</h2>
                </div>
                <div>
                    <h1 className='final-page'>All Questions</h1>
                    <GameLine width="400" height = "10"/>
                    <div>deneme</div>
                    <div>deneme</div>
                    <div>deneme</div>
                    <div>deneme</div>
                    <div>deneme</div>
                    <div>deneme</div>
                    <div>deneme</div>
                    <div>deneme</div>
                    <div>deneme</div>
                    <div>deneme</div>
                </div>
            </div>
        </>
    );
}

export default Result;