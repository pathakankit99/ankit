import React from 'react'
import "../styles/Navbar.css"
function Navbar() {
    return (
        <nav className="p-6 flex justify-between items-center">
            <div className="logo text-xl md:text-4xl  w-4/12">
                <h1>Ankit Pathak</h1>
            </div>
            <div className="w-8/12">
                <ul className="flex justify-end w-full px-4">
                    <li className="bg-pink-500 hover:text-pink-200 px-4 py-2 font-bold text-xl md:text-3xl">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
