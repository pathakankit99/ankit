import React from 'react'

import hero from '../img1.jpg';
function Section4() {
    return (
        <div style={{backgroundColor: "#e3cc02"}} className="text-center lg:text-left p-4 pt-16 lg:pt-4 w-full flex flex-wrap justify-center items-center">
            <div  style={{color: "#33322d"}} className="w-full lg:w-6/12">
                <p className="text-2xl md:text-4xl pb-2">We Create</p>
                <h1  className="text-4xl md:text-7xl font-extrabold">Websites</h1>
                <p className="text-2xl md:text-4xl pt-2">That represent your brands!</p>
            </div>
            <div className="w-full lg:w-6/12">
                <img alt="website development" src={hero}/>
            </div>
        </div>
    )
}

export default Section4
