import { data } from 'autoprefixer';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../component/Contexts/AuthProvider/AuthProvider';

const BookModel = ({ treatment, selectedDate, setTreatment ,  refetch}) => {
    const { name: treatmentName, slots,price } = treatment;
    const date = format(selectedDate, 'PP');

    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const from = event.target;
        const slot = from.slot.value;
        const name = from.name.value;
        const email = from.email.value;
        const phone = from.phone.value;

        const booking = {
            appointmentData: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price

        }
        console.log(booking);
        fetch('https://doctores-protal-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed')
                    refetch()
                    
                }
                else{
                  toast.error(data.message)
                }

            })


    }

    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" disabled value={date} placeholder="Type here" className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input name='email' defaultValue={user?.email} disabled type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <br />
                        <input type="submit" value='submit' className="input input-bordered w-full btn" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookModel;