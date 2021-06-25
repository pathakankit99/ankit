import React from 'react'
import '../styles/Section1.css'
import Typewriter from 'typewriter-effect';
function Section1() {
    return (
        <section className="p-4 min-h-100 flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-6/12 flex justify-center items-center">
                <div className="pt-24 lg:pt-0">
                    <p className="text-2xl md:text-4xl pb-2">I am</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold">Ankit Pathak</h1>
                    <span className="text-2xl md:text-4xl pt-2">A </span><span className="text-2xl md:text-4xl pt-2">
                    <Typewriter
                    options={{
                        strings: ['Web Developer', 'Web Designer'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    </span>
                </div>
            </div>
            <div className="w-full pt-6 lg:w-6/12 flex justify-center">
                <img className="hero" src="https://res.cloudinary.com/ak99/image/upload/v1624606712/VID_1875_ktxire.jpg" alt="Ankit Pathak"/>
            </div>      
        </section>
    )
}

export default Section1
