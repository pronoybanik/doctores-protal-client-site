import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../component/Contexts/AuthProvider/AuthProvider';

const NevBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()

    }

    const menuItems = <React.Fragment>
        <li><Link  className="btn btn-ghost btn-sm mt-2 ml-2" to='/'>Home</Link></li>
        <li><Link  className="btn btn-ghost btn-sm mt-2 ml-2" to='/appointment'>Appointment</Link></li>
        {/* <li><Link to='/about'>About</Link></li> */}

        <>
            {
                user?.uid ?
                    <>
                        <li><Link className="btn btn-ghost btn-sm mt-2 ml-2" to='/dashboard'> DashBoard </Link></li>
                        <li><button className="btn btn-ghost btn-sm mt-2 ml-2" onClick={handleLogOut} to='/logout'>Sign out</button></li>
                    </>
                    :
                    <li><Link className="btn btn-ghost btn-sm mt-2 ml-2" to='/login'>Sign In</Link></li>
            }
        </>
    </React.Fragment>

    // email: pronoybanik82@gmail.com
    // pass: aA@123
    // hosting: https://doctors-protal-c7857.web.app/

    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 flex justify-between ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">Doctors<p className='ml-2 text-amber-600'>.Portal</p></Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            menuItems
                        }
                    </ul>
                </div>

                <label htmlFor="drawer-box" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default NevBar;