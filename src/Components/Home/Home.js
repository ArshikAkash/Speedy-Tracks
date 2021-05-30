import React, { useState } from 'react';
import './Home.css';
import fakeData from '../../fakeData/fakeData.json';
import { useHistory } from 'react-router';

const Home = () => {
    const [vehicles] = useState(fakeData);
    const history = useHistory();
    const handleDestination = (bedType) => {
        history.push(`/destination`);
    };
    return (
        <div className='banner-text'>
            <h1>
                Choose <span id='paste'>Your</span> Ride{' '}
                <span id='paste'>...</span>
            </h1>
            <div className='container'>
                {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className='body'>
                        <div>
                            <div className='card'>
                                <div className='face face1'>
                                    <div className='content'>
                                        <img src={vehicle.image} alt=''></img>
                                        <h3>{vehicle.name}</h3>
                                    </div>
                                </div>
                                <div className='face face2'>
                                    <div className='content'>
                                        <p>{vehicle.description}</p>
                                        <h5>Cost:${vehicle.cost}</h5>
                                        <button
                                            onClick={() => handleDestination()}
                                        >
                                            Confirm Ride
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
