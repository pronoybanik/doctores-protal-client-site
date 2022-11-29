import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../component/Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Pages/hooks/useAdmin';
import Loading from '../../Pages/Loading/Loading';

const AdminRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) { 
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};


export default AdminRouter;