import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
const FriendForm = () => {
    const [ people, setPeople ] = useState([])
    const [ newFriend, setNewFriend ] = useState([])
    useEffect(() => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth().get('/api/friends', people)
            .then( res => {
                // console.log('this is the data', res.data)
                setPeople(res.data)
            })
            .catch( err => {
                console.log(err)
            });
    }, [])
    const handleChange = e => {
        setNewFriend({
            ...newFriend, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        const token = window.localStorage.getItem('token');
        axiosWithAuth().post('api/friends', newFriend)
            .then( res => {
                console.log(res.data)
                setPeople(res.data)
            })
            .catch( err => {
                console.log(err)
            })
            // window.location.reload();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='name'
                    placeholder='Enter Name'
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='Enter Age'
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='Enter Email'
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
            <div>
                <h1>My Friends List</h1>
                {people.map( friend => {
                    return (
                        <div className='friends'>
                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default FriendForm;