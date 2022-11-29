import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Loading/Loading';
import DoctorAppointment from '../Appointment/DoctorAppointment/DoctorAppointment';
import BookModel from '../BookModel/BookModel';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [] , refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date ],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))

    // }, []);

    return (
        <div>
            <h2 className='text-center mt-6 font-bold text-primary'>
                <p>You Have selected data: {format(selectedDate, 'PP')}</p>

            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16'>
                {
                    appointmentOptions.map(appointmentOption => <DoctorAppointment
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                       ></DoctorAppointment>)
                }
            </div>

            {
                treatment &&
                <BookModel
                    selectedDate={selectedDate}
                    treatment={treatment}
                    refetch={refetch}
                    setTreatment={setTreatment}
                ></BookModel>
            }
        </div>
    );
};

export default AvailableAppointment;