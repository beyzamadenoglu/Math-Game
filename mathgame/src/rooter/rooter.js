/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Game from '../pages/Game';
import Result from '../pages/Result';


function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/game' element={<Game />} />
                <Route path='/result' element={<Result />} />
            </Routes>
        </>
    );
}

export default Router;