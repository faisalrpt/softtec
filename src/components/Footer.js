import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () =>{
    return(
        <>
        <footer className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <p className="mb-4 logo"><span className="primaryColor">Sof</span>ttec</p>
                        <p>We denounce with righteous indignation in and dislike men who are so beguiled and to demo realized by the harms of pleasure moment of business.</p>
                        <NavLink className="btn btn-light" to="/service">Read More</NavLink>
                    </div>
                    <div className="col-sm-4">
                        <p className="h3">Useful link</p>
                        <ul className="mt-4 navbar-nav">
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Contact Us</li>
                        </ul>

                    </div>
                    <div className="col-sm-4">
                        <p className="h3">Our featured</p>
                        <ul className="mt-4 navbar-nav">
                            <li>Website Security</li>
                            <li>Daily Earnings</li>
                            <li>Global Business</li>
                            <li>Web Devlopment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;