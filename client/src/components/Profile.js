import React from 'react';
import { useAuthContext } from '../context/AuthContext';

const Profile = () => {
    const { state } = useAuthContext();
    
    return (
        <div>
            <h1>User Profile</h1>
            {state.user ? (
                <div>
                    <h2>Welcome, {state.user}</h2>
                    <button onClick={() => { localStorage.removeItem('token'); /* dispatch logout action */ }}>Logout</button>
                </div>
            ) : (
                <h2>Please log in</h2>
            )}
        </div>
    );
};

export default Profile;
