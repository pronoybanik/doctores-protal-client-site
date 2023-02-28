import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';

const AllUsers = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctores-protal-server.vercel.app/users');
            const data = await res.json()
            return data;
        }
    })



    const handleAdmin = id => {
        fetch(`https://doctores-protal-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Make admin successful')
                }
            })
    }




    const handleDelete = (user) => {

        fetch(`https://doctores-protal-server.vercel.app/user/${user?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success(`Delete user ${user.name}`)
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl'>All users</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleAdmin(user._id)} className="btn btn-info btn-sm text-white">Make Admin</button>}</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-error btn-sm">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;