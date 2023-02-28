import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../component/Contexts/AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `https://doctores-protal-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] , isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
  
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl mb-10'>My Appointment</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.slot}</td>
                                <td>{booking.appointmentData}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-primary btn-sm'>pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid &&
                                        <span className='btn btn-primary'>paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;