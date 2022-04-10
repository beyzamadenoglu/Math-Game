/* eslint-disable react/prop-types */
import React from 'react';

const GameLine = (props) => {
    return(
        <svg width={props?.width || '640'} height={props.height ||'10'} viewBox="0 0 640 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0000" d="M639.998 1.72994C641.22 -1.50429 12.5197 0.574858 5.18769 1.72994C-2.14435 2.88503 -1.30127 5.72697 5.18769 9.1225C11.6766 12.518 619.626 4.96418 619.626 4.96418C619.626 4.96418 638.776 4.96418 639.998 1.72994Z" />
        </svg>  
    );
};

export default GameLine;