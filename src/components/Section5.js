import React from 'react'

import hero from '../img2.jpg';
function Section5() {
    return (
        <div style={{backgroundColor: "#f36d62"}} className="text-center lg:text-left  pt-16 lg:pt-4 p-4 w-full flex justify-center items-center flex-wrap">
            <div className="w-full order-1 lg:w-6/12">
                <img alt="website development" src={hero}/>
            </div>
            <div  style={{color: "#33322d"}} className="w-full order-first lg:order-last lg:w-6/12">
                <p className="text-2xl md:text-4xl pb-2">We Use</p>
                <h1  className="text-4xl md:text-7xl font-extrabold"><code>{"{HTML"}{"}"}{"{CSS"}{"}"}{"{React"}{"}"}{"{Node"}{"}"}</code></h1>
                <p className="text-2xl md:text-4xl pt-2">And whatever else might be required!</p>
            </div>
        </div>
    )
}

export default Section5
