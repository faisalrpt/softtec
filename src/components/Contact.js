import React, { useState } from 'react';
    const Contact = ()=>{
        
        const [data, setData] = useState({
            fullName:'',
            email: '',
            mobile: '',
            msg: ''
        })
    
    const formData = (e) =>{
        const {name, value} = e.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            }
        })

    }
    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`Your Name Is ${data.fullName}, Your Email id Is ${data.email} and Your Mobile Number is ${data.mobile}, And Your Message Is ${data.msg}`)

    }
    return (
        <>
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="mb-5">About Us</h1>
                            <p><i class="fas fa-mobile-alt"></i> &nbsp;9876543210</p>
                            <p><i class="far fa-envelope"></i>info@softtec.com</p>
                            <p><i class="fas fa-map-marker-alt"></i> B-52 simply dummy text printing and typesetting Delhi 110076 </p>
                            <p><i class="fas fa-map-marker-alt"></i> B-52 simply dummy text printing and typesetting Delhi 110036 </p>
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                    <label for="name" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" name="fullName" value={data.fullName} onChange={formData} id="name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" name="email" value={data.email} onChange={formData} id="email" aria-describedby="emailHelp" />
                                </div>
                                    
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Mobile Number</label>
                                        <input type="text" class="form-control" name="mobile" value={data.mobile} onChange={formData} id="mobile" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Message</label>
                                        <textarea class="form-control" name="msg" value={data.msg} onChange={formData} id="msg"></textarea>
                                    </div>
                                        
                                            <div className="text-center">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                            </div>
                                </form>
                                    </div>
                                </div>
            </div>
        </section>
        </>
    )
}
export default Contact;