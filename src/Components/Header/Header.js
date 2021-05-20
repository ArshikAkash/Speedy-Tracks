import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/logo.png';
import './Header.css';

const Header = () => {
    const [isActive, setActive] = useState('false');
    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div>
            <div className='header'>
                <Link className='logo' to='/home'>
                    <img className='logo' src={logo} alt='' />
                </Link>
                <div
                    onClick={() => handleToggle()}
                    className={isActive ? 'toggle' : 'toggle active'}
                ></div>
                <nav className={isActive ? '' : 'active'}>
                    <ul>
                        <li>
                            <Link to='/home' className='a'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='a' to='/destination'>
                                Destination
                            </Link>
                        </li>
                        <li>
                            <Link className='a' to='/home'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className='a' to='/home'>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className='a active' to='/login'>
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='clearfix'></div>
            </div>

            {/* <nav className='nav'>
                <ul>
                    <li>
                        <Link to='/home'>
                            <img className='logo' src={logo} alt='' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link className='btn-book' to='/destination'>
                            Destination
                        </Link>
                    </li>
                </ul>
            </nav> */}
        </div>
    );
};

export default Header;
