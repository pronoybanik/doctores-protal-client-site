import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../component/Contexts/AuthProvider/AuthProvider';
import NevBar from '../../Pages/Sheare/NevBar/NevBar';
import useAdmin from '../hooks/useAdmin';


const DashboardPage = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <NevBar></NevBar>
            <div className="drawer drawer-mobile">
                <input id="drawer-box" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-box" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/dashboard'>My appointment</Link></li>

                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctors'>Add Doctors</Link></li>
                                <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                            </>

                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;