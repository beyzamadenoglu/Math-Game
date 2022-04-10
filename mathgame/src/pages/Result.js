import { useEffect, React } from 'react';

import { GameLine } from '../constants/images';
import { useTour } from '../contexts/tour';


// eslint-disable-next-line react/prop-types
function Result() {
    const { tourNumber } = useTour();

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
                    <h2>Questions</h2>
                    <h2>Correct Answers</h2>
                    <h2>Restart</h2>
                </div>
                <div>
                    <h1 className='final-page'>All Questions</h1>
                    <GameLine width="400" height="10" />
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

                <a href='/'>restart</a>
            </div>
        </>
    );
}

export default Result;
