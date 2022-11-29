import React from 'react';

const InfoCard = ({ card }) => {
    console.log(card);

    const { name, description, icon, bgClass } = card;
    return (
        <div>
            <div className={`card lg:card-side shadow-xl pt-4 text-white px-6 ${bgClass}`}>
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