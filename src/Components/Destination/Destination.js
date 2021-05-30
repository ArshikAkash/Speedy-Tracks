import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Destination.css';

const Destination = () => {
    const [location, setLocation] = useState({
        pickUpLocation: 'Chittagong',
        dropOffLocation: '',
    });
    const handleChange = () => {
        const pick = document.getElementById('pickUpLocation').value;
        location.pickUpLocation = pick;
        const drop = document.getElementById('dropOffLocation').value;
        location.dropOffLocation = drop;
    };
    const [isActive, setIsActive] = useState('false');
    const handleToggle = () => {
        setIsActive(!isActive);
    };
    const url = `https://maps.google.com/maps?q=${location.pickUpLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className='body'>
            <div className='search'>
                <div className='formBox'>
                    <form>
                        <input
                            placeholder='Enter pick up location'
                            onChange={handleChange}
                            type='search'
                            name='pickUpLocation'
                            id='pickUpLocation'
                        />
                        <input
                            onChange={handleChange}
                            type='search'
                            name='dropOffLocation'
                            id='dropOffLocation'
                            placeholder='Enter your destination'
                        />
                        <Button
                            onClick={handleToggle}
                            variant='contained'
                            className='btn'
                        >
                            Search
                        </Button>
                    </form>
                    <div
                        className={
                            isActive ? 'destination' : 'destination active'
                        }
                    >
                        <h1>Please wait . Your ride is on the way.</h1>
                        <br />
                        <h3>Have a great journey🚙</h3>
                    </div>
                </div>
            </div>
            <div className='result'>
                <div className='map-responsive'>
                    <iframe
                        title='map'
                        src={url}
                        width='600'
                        height='450'
                        frameBorder='0'
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className='height'></div>
        </div>
    );
};

export default Destination;
