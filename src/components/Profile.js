import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = () => {
    if (localStorage.onLoggined) {
        return (
            <div>
                <h1 className='text'>Profile page</h1>
            </div>
        )
    }
    return <Redirect to='/login/'/>
};

export default Profile;
