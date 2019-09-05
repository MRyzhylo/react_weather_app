import React from 'react';

import './Cityweather.css';
import sun from '../../img/sun-icon.svg';
import snow from '../../img/snow-icon.svg';
import mist from '../../img/mist-icon.png';
import cloud from '../../img/cloud-icon.png';
import rain from '../../img/rain-icon.png';
import ca from '../../img/pic-1.jpg';
import br from '../../img/pic-2.jpg';
import pa from '../../img/pic-3.jpg';
import kh from '../../img/pic-4.jpg';


function Cityweather(props) {

    let currentTemp = 0;

    if(props.cities) {
        let fahrenheit = parseInt(props.cities.main.temp);
        let celsius = parseInt((fahrenheit - 32) * (5 / 9));
        if(props.tempSymbol === 'F') {
            currentTemp = fahrenheit;
        } else {
            currentTemp = celsius;
        }
    }

    return (
        <div>
            <div className='floater'>
                <div className='icon-temp'>
                    {props.cities && props.cities.weather[0].main === 'Clear' ?
                        <img src={sun} alt='sun' /> :
                        props.cities && props.cities.weather[0].main === 'Clouds' ?
                            <img src={cloud} alt='cloud' /> :
                            props.cities && props.cities.weather[0].main === 'Snow' ?
                                <img src={snow} alt='snow' /> :
                                props.cities && props.cities.weather[0].main === 'Mist' ?
                                    <img src={mist} alt='mist' /> :
                                    props.cities && props.cities.weather[0].main === 'Rain' ?
                                        <img src={rain} alt='rain' /> :
                                        <img src={sun} alt='sun' />
                    }

                    <p id='temp'>{props.cities ? currentTemp : ''}&deg;</p>
                </div>
                <p>{props.cities ? props.cities.weather[0].main.toUpperCase() : ''}</p>
            </div>
            {props.cities && props.cities.name === 'Los Angeles' ?
                <img src={ca} alt='Los Angeles' id='country-img' />
                : props.cities && props.cities.name === 'London' ?
                <img src={br} alt='london' id='country-img' />
                : props.cities && props.cities.name === 'Paris' ?
                <img src={pa} alt='london' id='country-img' />
                :
                <img src={kh} alt='london' id='country-img' />
            }
            <div className='country'>
                {props.cities && props.cities.name === 'Los Angeles' ?
                    <div>
                        <p>Los Angeles</p>
                        <p>California, USA</p>
                    </div>
                    : props.cities && props.cities.name === 'London' ?
                    <div>
                        <p>London</p>
                        <p>Great Britain</p>
                    </div>
                    : props.cities && props.cities.name === 'Paris' ?
                    <div>
                        <p>Paris</p>
                        <p>France</p>
                    </div>
                    :
                    <div>
                        <p>Kharkiv</p>
                        <p>Ukraine</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default Cityweather;