import React from 'react';

const Cservice = (props) => {
    console.log(props)
    return (
        <>
            <div class="col-lg-3 col-sm-6 mb-16">
                <div class="service-wrap">
                    <div class="icon-part">
                        <img src={props.imgpath} alt={props.imgsrc} />
                    </div>
                    <div class="content-part">
                        <h5 class="title"><a href="#">{props.title}</a></h5>
                        <div class="desc">{props.disc}</div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Cservice;