import React from 'react';

const DoctorAppointment = ({ appointmentOption, setTreatment }) => {
    const { name, slots, price } = appointmentOption;
    return (
        <div data-aos="zoom-in-down">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
                    <div className='text-center'>
                        <p>{slots?.length > 0 ? slots[0] : 'Try Another day'}</p>
                        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                        <p><small>Price: ${price}</small></p>
                    </div>
                    <div className="card-actions justify-center">
                        <label
                            htmlFor="book-modal"
                            className="btn btn-primary text-white"
                            onClick={() => setTreatment(appointmentOption)}
                        >Book APPOINTMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorAppointment;