import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';
import Loading from '../../Loading/Loading';

const ManageDoctors = () => {
    const [deleteDoctors, setDeleteDoctors] = useState(null)

    const closeModal = () => {
        setDeleteDoctors(null)
    }

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://doctores-protal-server.vercel.app/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`

                },

            })
            const data = await res.json()
            return data;
        }
    })

    const handleDelete = doctors => {

        fetch(`https://doctores-protal-server.vercel.app/doctors/${doctors._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success(`Delete doctors ${doctors.name}`)
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl my-8'>Manage Doctors: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.imgData} alt='' />
                                        </div>
                                    </div>
                                </th>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label htmlFor="confirmation-modal" onClick={() => setDeleteDoctors(doctor)} className="btn btn-outline btn-error">Delete</label>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctors &&
                <ConfirmationModal
                    title={`Are you sure you want to delete`}
                    message={`If you delete ${deleteDoctors.name}. It cannot be undone`}
                    closeModal={closeModal}
                    successActive={handleDelete}
                    modalData={deleteDoctors}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;