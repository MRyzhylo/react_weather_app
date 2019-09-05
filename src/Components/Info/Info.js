import React from 'react';

import './Info.css'

function Info(props) {
    return (
        <div className='bg_image'>
            <h1>Weather</h1>
            <h1>Me<span>Now</span></h1>
            <p>My litle react app with a minimal app design</p>
            <div className='bottom'>
                <p>Your weather is currently showing in:</p>
                <div className='buttons'>
                    <div className='btn'>
                        {props.tempSymbol === 'C' ?
                            <button className='cliked'>C</button>
                            :
                            <button onClick={props.setTempSymbol}>C</button>
                        }
                        <p>Celsius</p>
                    </div>
                    <div className='btn'>
                        {props.tempSymbol === 'F' ?
                            <button className='cliked'>F</button>
                            :
                            <button onClick={props.setTempSymbol}>F</button>
                        }
                        <p>Fahrenheit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;