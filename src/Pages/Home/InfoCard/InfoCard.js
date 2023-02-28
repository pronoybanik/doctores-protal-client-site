import React from 'react';

const InfoCard = ({ card }) => {

    const { name, description, icon, bgClass } = card;

    return (

        <div data-aos="zoom-in-down">
            <div className={`card lg:card-side shadow-xl pt-4 text-white px-6 h-44 ${bgClass}`}>
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;