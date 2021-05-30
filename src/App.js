import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [user, setUser] = useState({});
    console.log('this is logged in user info', loggedInUser);
    return (
        <div className='full-body'>
            <div className='welcomeMsg'>
                {loggedInUser.success ? (
                    <h3>
                        Welcome,{loggedInUser.displayName || loggedInUser.name}
                    </h3>
                ) : (
                    <h2> </h2>
                )}
                {loggedInUser.success ? (
                    <img
                        style={{ width: '50px', borderRadius: '50%' }}
                        src={loggedInUser.photo}
                        alt=''
                    />
                ) : (
                    <h1> </h1>
                )}
            </div>
            <UserContext.Provider
                value={[loggedInUser, setLoggedInUser, user, setUser]}
            >
                <Router>
                    <Header />
                    <Switch>
                        <Route path='/home'>
                            <Home />
                        </Route>
                        <Route path='/login'>
                            <Login></Login>
                        </Route>
                        <PrivateRoute path='/destination'>
                            <Destination />
                        </PrivateRoute>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
