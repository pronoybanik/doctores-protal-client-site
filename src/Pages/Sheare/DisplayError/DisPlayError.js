import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../component/Contexts/AuthProvider/AuthProvider';

const DisPlayError = () => {
    const { logOut } = useContext(AuthContext)

    const error = useRouteError()

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()

    }

    return (
        <div>

            <h2 className='text-red-600'>Something went wrong!!</h2>
            <p className='text-red-400'> {error.statusText || error.message}</p>
            <h3>please <button onClick={handleLogOut} to='/logout'>Sign out</button></h3>
        </div>
    );
};

export default DisPlayError;