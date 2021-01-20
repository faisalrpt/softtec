import React from 'react';
import {NavLink} from 'react-router-dom';
const CAbout = (props) =>{
    return(
        <>
        <section className={"about my-5 py-5 d-flex align-items-center" + " "+ props.bg}>
            <div className="container">
                {/* <h1 className="text-center mb-4">About Us</h1> */}
                <div className="row">
                <div className={"col-md-6 mt-5 " +" "+ props.order}>
                    <h1>We Provides Best Advice For Your Business</h1>
                    <p className="mt-4">Reobiz donec pulvinar magna id leoersi pellentesque impered dignissim rhoncus euismod euismod eros vitae.</p>
                     <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                     <NavLink className="btn btn-primary" to={props.linkTo}>{props.buttonTitle}</NavLink>
                 </div>
                <div className={"col-md-6 mt-5 d-flex justify-content-center flex-column" + " " + props.animated}>
                    <img className="img-fluid" src={props.img} alt="about" width={props.width} />
                </div>
                </div>
            </div>

        </section>
        </>
    )
}
export default CAbout;