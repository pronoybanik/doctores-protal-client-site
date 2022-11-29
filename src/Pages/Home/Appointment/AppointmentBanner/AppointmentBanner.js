import React from 'react';
import chair from '../../../../assets/images/chair.png';
import img from '../../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns'; 



const AppointmentBanner = ({selectedDate,setSelectedDate}) => {


    return (
        <div  className='edit w-full h-1/4'
        style={{ 
            
            background: `url(${img})`
            
        }}
         
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />

                    <div className='mr-12'>
                        <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        // footer={footer}
                        />
                    <p>You Have selected data: {format(selectedDate, 'PP')}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppointmentBanner;