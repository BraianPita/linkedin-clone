import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { login } from './features/user/userSlice';
// import { useReducer } from 'react';
import firebase from 'firebase/compat/app';
import { auth } from './features/firebase/firebaseApp';
import 'firebaseui/dist/firebaseui.css';
import './Login.css';


var firebaseui = require('firebaseui');

// Initialize the FirebaseUI Widget using Firebase.
var authUI = new firebaseui.auth.AuthUI(auth);


// const formReducer = (state, event) => {
//     return {
//       ...state,
//       [event.name]: event.value
//     }
//    }

const Login = () => {

    // const [formData, setFormData] = useReducer(formReducer, {});

    // const handleChange = event => {
    //     setFormData({
    //       name: event.target.name,
    //       value: event.target.value,
    //     });
    //   }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    
    //     loginAction(formData);
    // };




    const dispatch = useDispatch();

    useEffect(() => {

        // const loginAction = (data) => {
        //     dispatch(login(data));
        // }
    

        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return false;
                },
                uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
                }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
        };

        // The start method will wait until the DOM is loaded.
        authUI.start('#firebaseui-auth-container', uiConfig);
    }, [dispatch])


    return (
        <div className='login'>
            <div className='login__form'>

                <div className="login__logo">
                    <h1>Linked</h1>
                    <img src="./linkedin.png" alt="Logo" />
                </div>

                <div id="firebaseui-auth-container"></div>
                <div id="loader">Loading...</div>

                {/* <section>
                    <div className='login__row'>
                        <label htmlFor='userInput'>Username</label>
                        <input value={formData.username} onChange={handleChange} name="username" type="text" />
                    </div>

                    <div className='login__row'>
                        <label htmlFor="passwordInput">Password</label>
                        <input value={formData.password} onChange={handleChange} name="password" type="password" />
                    </div>
                </section>

                <button type='submit'>Login</button> */}

            </div>
        </div>
    )
}

export default Login