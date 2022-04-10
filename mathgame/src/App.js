import React from 'react';
import './App.css';
import { TourProvider } from './contexts/tour';
import Router from './rooter/rooter';


function App() {
    return (
        <TourProvider>
            <Router />
        </TourProvider>
    );
}

export default App;
