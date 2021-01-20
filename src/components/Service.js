import React from 'react';
import Cservice from './common/Cservice'
import serviceData from '../Data';

const Service = () => {
    return (
        <>
            <section className="service my-5">
                <div className="container">
                    <h1 className="text-center mb-5">Our Services</h1>
                    <div className="row gy-4">
                        {
                            serviceData.map((data, key) => {
                                return <Cservice key={key} imgpath={data.imgsrc} title={data.title} disc={data.disc}
                                />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Service;