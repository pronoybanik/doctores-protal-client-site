import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, successActive, modalData }) => {
    console.log(modalData);
    return (
        <div>
            <label htmlFor="confirmation-modal" className="btn">open modal</label>

            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successActive(modalData)} htmlFor="confirmation-modal" className="btn">Delete</label>
                        <button onClick={closeModal} className="btn btn-outline">cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;