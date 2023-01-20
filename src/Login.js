import React from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/user/userSlice';
import { useReducer } from 'react';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

const Login = () => {

    const [formData, setFormData] = useReducer(formReducer, {});

    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
      }

    const dispatch = useDispatch();

    const loginAction = (data) => {
        dispatch(login(data));
    }

    const onSubmit = (e) => {
        e.preventDefault();
    
        loginAction(formData);
    };

    return (
        <div className='login'>
            <form onSubmit={onSubmit} action="POST">

                <div className="login__logo">
                    <h1>Linked</h1>
                    <img src="./linkedin.png" alt="Logo" />
                </div>

                <section>
                    <div className='login__row'>
                        <label htmlFor='userInput'>Username</label>
                        <input value={formData.username} onChange={handleChange} name="username" type="text" />
                    </div>

                    <div className='login__row'>
                        <label htmlFor="passwordInput">Password</label>
                        <input value={formData.password} onChange={handleChange} name="password" type="password" />
                    </div>
                </section>

                <button type='submit'>Login</button>

            </form>
        </div>
    )
}

export default Login