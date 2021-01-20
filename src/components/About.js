import React from 'react';
import AboutImg from '../images/about2.png'
import CAbout from './common/Cabout';
import Card from './common/CardAbout';
import {missionValue} from '../Data';
const About = () =>{
    return(
        <>
        {/* <h1 className="text-center mb-4">About Us</h1> */}
        <CAbout img={AboutImg} linkTo="/contact" buttonTitle="Enquery" width="90%" animated="animated-about" />
        <section className="missionValue my-5">
            <div className="container">
                <div className="row">
                    {
                        missionValue.map((val,i)=>{
                            return <Card imgsrc={val.img} title={val.title} disc={val.disc} />

                        })
                    }

                </div>
            </div>
        </section>
        
        
        </>
    )
}
export default About;