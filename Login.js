import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Login.css';

const Login = () => {

    const [{}, dispatch] = useStateValue();

    const signin = () => {
       auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div classNmae='login'>
            <div className= 'login__container'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/7/7f/Speech_bubble.svg'
                    alt=''
                 />
                 <div className ='login__text'>
                    <h1>Niaje mzeiya</h1>
                    <h1>Sign in to Niaje</h1>
                 </div>
                 <Button  onClick={signin}>
                     Sign in with Google
                 </Button>
            </div>
        </div>
    )
}

export default Login
