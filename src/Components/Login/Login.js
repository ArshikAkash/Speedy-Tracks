import React, { useContext, useState } from 'react';
import './Login.css';
import signInImage from './../../images/signIn.jpg';
import signUpImage from './../../images/signUp.jpg';
import { Button } from '@material-ui/core';
import google from './../../images/google.png';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import {
    handleFbSignIn,
    handleGitSignIn,
    handleGoogleSignIn,
    initializeLoginFrameWork,
} from './LoginManager';

initializeLoginFrameWork();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    });

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: '/destination' } };

    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => {
            handleResponse(res, true);
        });
    };

    const fbSignIn = () => {
        handleFbSignIn().then((res) => {
            handleResponse(res, true);
        });
    };

    const gitSignIn = () => {
        handleGitSignIn().then((res) => {
            handleResponse(res, true);
        });
    };

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    };

    console.log('loggedInUser', loggedInUser, 'user', user);

    const [isActive, setActive] = useState('false');
    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div>
            <section className={isActive ? 'section' : 'section active'}>
                <div className={isActive ? 'container' : 'container active'}>
                    <div className='user signInBox'>
                        <div className='imgBox'>
                            <img className='image' src={signInImage} alt='' />
                        </div>
                        <div className='formBox'>
                            <form>
                                <h2>Sign In</h2>
                                <input
                                    type='text'
                                    placeholder='Username Or Email'
                                />
                                <input type='password' placeholder='Password' />
                                <input type='submit' value='Login' />
                                <p className='signUp'>
                                    Don't have an account?
                                    <span>
                                        <a
                                            onClick={() => handleToggle()}
                                            href='#a'
                                        >
                                            Sign up.
                                        </a>
                                    </span>
                                </p>

                                <Button
                                    variant='contained'
                                    onClick={googleSignIn}
                                    style={{
                                        borderRadius: '50%',
                                        width: '60px',
                                        height: '60px',
                                    }}
                                >
                                    <img
                                        style={{ width: '200%' }}
                                        src={google}
                                        alt=''
                                    />
                                </Button>
                                <Button
                                    variant='contained'
                                    onClick={fbSignIn}
                                    style={{
                                        borderRadius: '50%',
                                        width: '60px',
                                        height: '60px',
                                    }}
                                >
                                    <img
                                        style={{ width: '200%' }}
                                        src={google}
                                        alt=''
                                    />
                                </Button>
                                <Button
                                    variant='contained'
                                    onClick={gitSignIn}
                                    style={{
                                        borderRadius: '50%',
                                        width: '60px',
                                        height: '60px',
                                    }}
                                >
                                    <img
                                        style={{ width: '200%' }}
                                        src={google}
                                        alt=''
                                    />
                                </Button>
                            </form>
                        </div>
                    </div>
                    <div className='user signUpBox'>
                        <div className='formBox'>
                            <form>
                                <h2>Create an account</h2>
                                <input type='text' placeholder='Username' />
                                <input type='text' placeholder='Email' />
                                <input
                                    type='password'
                                    placeholder='Create Password'
                                />
                                <input
                                    type='password'
                                    placeholder='Confirm Password'
                                />
                                <input type='submit' value='Sign Up' />
                                <p className='signUp'>
                                    Already have an account?
                                    <span>
                                        <a
                                            onClick={() => handleToggle()}
                                            href='#a'
                                        >
                                            Sign in.
                                        </a>
                                    </span>
                                </p>
                            </form>
                        </div>
                        <div className='imgBox'>
                            <img className='image' src={signUpImage} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
