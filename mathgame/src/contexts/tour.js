/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';

const TourContext = React.createContext();

//wrapper
const TourProvider = ({ children }) => {
    const [tourNumber, setTourNumber] = useState(1);

    const increaseTour = questionNo => {
        let currentTour = tourNumber;

        currentTour = (questionNo == 10) ?  (currentTour + 1) : currentTour;

        setTourNumber(currentTour);
    };


    return (
        <TourContext.Provider
            value={
                { tourNumber, increaseTour }
            }>
            {children}
        </TourContext.Provider>
    );
};

function useTour() {
    return useContext(TourContext);
}

export { TourContext, TourProvider, useTour };