import React from 'react'
import Typewriter from 'typewriter-effect';
function Section2() {
    return (
        <section style={{backgroundColor: "#4c0552"}} className="p-4 py-16 text-center">
            <div className="text-4xl md:text-6xl">You need just a Website?</div>
            <div className="pt-4">
                <p style={{fontWeight: 800}} className="text-4xl md:text-6xl text-red-500">Nah!</p>
                <p className="text-2xl md:text-4xl pt-4"><strong>You </strong>need a website that's <span className="text-4xl">
                    <Typewriter
                    options={{
                        strings: ['Fast', 'Beautiful','Secure', 'Responsive', 'Interactive'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                    </span></p>
            </div>        
        </section>
    )
}

export default Section2
