import React from 'react';
import FadingBalls from 'react-cssfx-loading/lib/FadingBalls';
import variables from '../variables.module.scss';

export const Loading = () => {
    return (
        <div className="col text-center m-5 dx-flex loading">
            <div>
                <FadingBalls 
                    color={variables.colorWarmLight}
                />
                <p>Loading...</p>
            </div>
        </div>
    );
}