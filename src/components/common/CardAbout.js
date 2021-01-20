import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="col-sm-4">
            <div class="card text-center">
                <img src={props.imgsrc} class="card-img-top" alt={props.img} />
                    <div class="card-body">
                        <h3 class="card-title">{props.title}</h3>
                        <p class="card-text">{props.disc}</p>
                    </div>
            </div>
            </div>
        </>
    )
}
export default Card;