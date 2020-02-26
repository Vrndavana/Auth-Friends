import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LoginForm = (props) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    
    const handleChanges = e => {
        setCredentials({
                ...credentials,
                [e.target.name]: e.target.value
        })
    };
    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/login', credentials)
        .then( res => {
            window.localStorage.setItem('token', res.data.payload);
            props.history.push('/protected');
        })
        .catch( err => console.log(err));
    }
        return (
            <div>
                <form onSubmit={login}>
                    <input
                        type='text'
                        name='username'
                        value={props.username}
                        onChange={handleChanges}
                    />
                    <input 
                        type="password"
                        name="password"
                        value={props.password}
                        onChange={handleChanges}
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
export default LoginForm;