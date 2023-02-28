import React from 'react';
import bg from '../../../assets/images/bg.png'

const Footer = () => {



    return (
        <div data-aos="zoom-in-down" className='mt-4'
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
                
            }}
        >
            <footer className=" p-10 ">
                <div className='footer'>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>

                    </div>
                </div>
                <div className='text-center mt-32'>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;