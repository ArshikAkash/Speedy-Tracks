import React, { useContext, useState } from 'react';
import './Login.css';
import signInImage from './../../images/signIn.jpg';
import signUpImage from './../../images/signUp.jpg';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGithub,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import {
    createUserWithEmailAndPassword,
    handleFbSignIn,
    handleGitSignIn,
    handleGoogleSignIn,
    initializeLoginFrameWork,
    signInWithEmailAndPassword,
} from './LoginManager';

initializeLoginFrameWork();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
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

    const handleBlur = (e) => {
        let isFieldValid = true;

        const password = document.getElementById('password').value;
        const confirmPassword =
            document.getElementById('confirmPassword').value;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }

        if (password === confirmPassword) {
            if (e.target.name === 'password') {
                const passwordLength = e.target.value.length;
                if (passwordLength > 5) {
                    const thePassword = e.target.value;
                    isFieldValid = passwordLength && thePassword;
                } else {
                    alert('Password must be atleast 6 characters');
                }
            }
        }
        if (password !== confirmPassword) {
            alert('Password did not matched ! Please try again');
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(
                user.name,
                user.email,
                user.password
            ).then((res) => {
                res.name = user.name;
                handleResponse(res, true);
            });
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password).then(
                (res) => {
                    res.photo = user.photoURL;
                    handleResponse(res, true);
                }
            );
        }
    };
    // console.log('loggedInUser', loggedInUser, 'user', user);

    const [isActive, setActive] = useState('false');
    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div>
            {' '}
            <ReactTooltip />
            <section className={isActive ? 'section' : 'section active'}>
                <div className={isActive ? 'container' : 'container active'}>
                    <div className='user signInBox'>
                        <div className='imgBox'>
                            <img className='image' src={signInImage} alt='' />
                        </div>
                        <div className='formBox'>
                            <form onSubmit={handleSubmit}>
                                <h2>Sign In</h2>
                                <input
                                    onBlur={handleBlur}
                                    name='email'
                                    required
                                    type='text'
                                    placeholder='Username Or Email'
                                />
                                <input
                                    onBlur={handleBlur}
                                    required
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                />
                                <input type='submit' value='Login' />
                                <p className='signUp'>
                                    Don't have an account?
                                    <span>
                                        <a
                                            name='newUser'
                                            id=''
                                            onClick={() => {
                                                handleToggle();
                                                setNewUser(!newUser);
                                            }}
                                            href='#signUp'
                                        >
                                            Sign up.
                                        </a>
                                    </span>
                                </p>
                                <br />
                                <h5 className='continue'>Continue With</h5>
                                <div className='wrapper'>
                                    <div className='button'>
                                        <div
                                            onClick={googleSignIn}
                                            className='icon'
                                        >
                                            <FontAwesomeIcon
                                                className='i'
                                                icon={faGoogle}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <span>Google</span>
                                    </div>
                                    <div className='button'>
                                        <div
                                            onClick={fbSignIn}
                                            className='icon'
                                        >
                                            <FontAwesomeIcon
                                                className='i'
                                                icon={faFacebookF}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <span>Facebook</span>
                                    </div>
                                    <div className='button'>
                                        <div
                                            onClick={gitSignIn}
                                            className='icon'
                                        >
                                            <FontAwesomeIcon
                                                className='i'
                                                icon={faGithub}
                                            ></FontAwesomeIcon>
                                        </div>
                                        <span>GitHub</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='user signUpBox'>
                        <div className='formBox'>
                            <form onSubmit={handleSubmit}>
                                <h2>Create an account</h2>
                                <input
                                    name='name'
                                    required
                                    onBlur={handleBlur}
                                    type='text'
                                    placeholder='Username'
                                />
                                <input
                                    name='email'
                                    required
                                    onBlur={handleBlur}
                                    type='text'
                                    placeholder='Email'
                                />
                                <input
                                    required
                                    data-tip='Password must be atleast 6 characters'
                                    id='password'
                                    type='password'
                                    placeholder='Create Password'
                                />
                                <input
                                    onBlur={handleBlur}
                                    required
                                    data-tip='Retype Password'
                                    id='confirmPassword'
                                    name='password'
                                    type='password'
                                    placeholder='Confirm Password'
                                />
                                <input type='submit' value='Sign Up' />
                                <p className='signUp'>
                                    Already have an account?
                                    <span>
                                        <a
                                            name='newUser'
                                            id=''
                                            onClick={() => {
                                                handleToggle();
                                                setNewUser(!newUser);
                                            }}
                                            href='#signIn'
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
