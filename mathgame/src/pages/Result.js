import { useEffect, React } from 'react';

import { GameLine } from '../constants/images';
import { useTour } from '../contexts/tour';
import { useNavigate } from 'react-router-dom';
import { StartCircle }from '../constants/images';

// eslint-disable-next-line react/prop-types
function Result() {

    const { tourNumber } = useTour();
    const navigate = useNavigate();

    let result = localStorage.getItem('answerReport').split('@');
    console.log(result);

    let answers = Number(localStorage.getItem('Correct'));
    let score = Number(localStorage.getItem('Score'));

    useEffect(() => {
        console.log(tourNumber);
        console.log(tourNumber);
    }, [tourNumber]);


    return (
        <>
            <div className='container'>
                <div>
                    <h1 className='final-page'>Final</h1>
                    <GameLine width="400" height="8" />
                    <h2>Point: {score}</h2>
                    <h2>Questions: 10</h2>
                    <h2>Correct Answers: {answers}</h2>
                    <StartCircle width = '350'/>
                    <h2 onClick={() => navigate('/')} className='pointer restart'>
                            Restart
                    </h2>
                </div>
                <div>
                    <h1 className='final-page'>All Questions</h1>
                    <GameLine width="400" height="10" />

                    <ul>
                        {result.map(function (name, index) {
                            return <li key={index} className='report-li'>{name}</li>;
                        })}
                    </ul>

                </div>

            </div>
        </>
    );
}

export default Result;
