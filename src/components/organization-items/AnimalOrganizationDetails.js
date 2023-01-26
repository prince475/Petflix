import React from "react";

function AnimalOrganizationDetails({name, email, phone, city, state, postcode, country, url, photos, animalLink, selfLink}) {

    return (
        <div className="col-12 p-1">
            <div className="card h-100">
                <img className="card-img-top" src={photos} alt="{organaziation image}"/>
                <div className="card-body">
                    <h1 className="card-title">{name}</h1>

                    <h2><u id="contact">Contact:</u></h2>

                    <p><span className="title_start">Email:</span><span className="title_end p-2">{email}</span></p>

                    <p><span className="title_start">Phone:</span><span className="title_end p-2">{phone}</span></p>

                    <h2><u id="contact">Address:</u></h2>

                    <p><span className="title_start">City:</span><span className="title_end p-2">{city}</span></p>

                    <p><span className="title_start">State:</span><span className="title_end p-2">{state}</span></p>

                    <p><span className="title_start">Postcode:</span><span className="title_end p-2">{postcode}</span></p>

                    <p><span className="title_start">Country:</span><span className="title_end p-2">{country}</span></p>

                    <button id="visitBtn"><a href={url}>VISIT..</a></button>
                    
                    <a href={animalLink}>Animals Link</a>
                    <a href={selfLink}>Self Link</a>
                </div>
            </div>
        </div>
    )
}

export default AnimalOrganizationDetails
