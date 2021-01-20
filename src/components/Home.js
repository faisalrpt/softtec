import React from 'react';
import { NavLink } from 'react-router-dom';
import headerImg from '../images/banner.png'
import CAbout from './common/Cabout';
import AboutImg1 from '../images/about1.png';

const Home = () => {
    return (
        <>
            <section className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2 order-lg-1  mt-5 d-flex justify-content-center flex-column">
                            <h1>We Take Care Your <b className="primaryColor">Business Growth</b></h1>
                            <h5 className="my-3">We denounce with righteous indignation in and dislike men who are so beguiled and to demo realized by the harms of pleasure moment of business.</h5>
                            <div className="my-4">
                                <NavLink className="btn btn-primary" to="/service">Discover More</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 order-lg-2 mt-5  animated hederImg">
                            <img className="img-fluid" src={headerImg} alt="header_Img" />
                        </div>
                    </div>
                </div>
            </section>


            <CAbout img={AboutImg1} linkTo="/about" buttonTitle="Read More" width="70%" order="order-1" animated="animated-about" bg="homeAboutbg" />
        </>
    )
}
export default Home;