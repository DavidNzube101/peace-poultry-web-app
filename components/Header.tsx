'use client'

import { useState, useEffect } from "react"
// import { Link } from 'react-scroll'
// import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
    const menuItems = ['home', 'products', 'contact']
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768)
        } 
        handleResize()
        window.addEventListener('resize', handleResize)
        return()=> window.removeEventListener('resize', handleResize)

    }, [])

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header className="bg-white shadow-md fixed w-full z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <p>
                    Peace Poultry
                </p>
            
                {isMobile ? (
                    <div className="cursor-pointer" onClick={toggleMenu}>
                    <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    ></path>
                    </svg>
                </div>
                ): (
                    <>
                        <nav>
                            <ul className="flex space-x-6">
                                {menuItems.map((item, index) => (
                                    <a href={item}>
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </a>
                                ))}
                            </ul>
                        </nav>
                        <a href='tel:+2348065365570'
                        >
                            Get in Touch
                        </a>
                    </>
                )}
            </div>

            {isMobile && isMenuOpen && (
                <>
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {menuItems.map((item, index)=>(
                            <div className="cursor-pointer hover:text-black transition duration-300" onClick={toggleMenu}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </div>
                        ))}
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
                            Contact
                        </button>
                    </ul>
                </>
            )}
        </header>

        
    )
}

export default Header