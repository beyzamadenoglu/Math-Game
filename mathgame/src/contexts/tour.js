import React, { useContext, useState } from 'react';

const TourContext = React.createContext();

//wrapper
const TourProvider =({children}) => {
    const [tourNumber, setTourNumber] = useState(0);

    

};

export {TourContext, TourProvider};