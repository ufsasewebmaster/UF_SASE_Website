import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/backend';

const Profile = () => {
    const [users, setUsers] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetchData('/users');
                console.log(response);
                setUsers(response.payload);
            } catch (error) {
                setErrMsg(error.message);
            }
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        console.log('Users state updated:', users); // Log users whenever it changes
    }, [users]);

    return (
        <div>
            <h1>Profile Page</h1>
            {errMsg && <p>{errMsg}</p>}
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
