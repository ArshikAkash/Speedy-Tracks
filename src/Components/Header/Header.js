import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleSignOut } from '../Login/LoginManager';
import logo from './../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user, setUser] = useContext(UserContext);
    console.log('from header', user);
    const signOut = () => {
        handleSignOut().then((res) => {
            setUser(res);
        });
    };
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
                            {user.success ? (
                                <Link
                                    onClick={signOut}
                                    className='a active'
                                    to='/login'
                                >
                                    Sign Out
                                </Link>
                            ) : (
                                <Link className='a active' to='/login'>
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
                <div className='clearfix'></div>
            </div>
        </div>
    );
};

export default Header;
