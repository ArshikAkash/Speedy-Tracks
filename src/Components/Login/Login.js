import React, { useState } from 'react';
import './Login.css';
import signInImage from './../../images/signIn.jpg';
import signUpImage from './../../images/signUp.jpg';

const Login = () => {
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
