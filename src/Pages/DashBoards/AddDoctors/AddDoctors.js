import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Pages/Loading/Loading'

const AddDoctors = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate()

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialties'],
        queryFn: async () => {
            const res = await fetch('https://doctores-protal-server.vercel.app/appointmentSpecialty')
            const data = await res.json();
            return data
        }

    })

    const handleAddDoctors = data => {
        const imageData = data.image[0];
        const formData = new FormData();
        formData.append('image', imageData);

        const url = 'https://api.imgbb.com/1/upload?key=99f58a547dc4b1d269148eb1b605ef29'
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        imgData: imgData.data.url
                    }

                    // save doctors  api syetem
                    fetch('https://doctores-protal-server.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success(`${data.name} is added success`)
                            navigate('/dashboard/managedoctors')
                        })
                }
            })
    }







    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div className='pl-10'>
            <h2 className='text-2xl'>Add A Doctors</h2>

            <form onSubmit={handleSubmit(handleAddDoctors)}>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"  {...register("name", {
                        required: 'Name is required',
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-800'>{errors.name?.message}</p>}
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", {
                        required: 'email is required',
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-800'>{errors.email?.message}</p>}

                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                name={specialty.name}
                            >{specialty.name}</option>)
                        }

                    </select>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">photo</span>
                    </label>
                    <input type="file"  {...register("image", {
                        required: 'photo is required',
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-800'>{errors.img?.message}</p>}
                </div>

                <input className='btn w-80 mt-4' value='Add Doctors' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctors;