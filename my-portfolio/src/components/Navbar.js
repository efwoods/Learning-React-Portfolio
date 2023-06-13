import { IdentificationIcon } from '@heroicons/react/24/solid'
import React from "react";
import QR from "../images/linkedin-qr.png"

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                    <div className="sm:max-w-sm sm:w-full md:w-1/12 w-5/6">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src={QR}
                            />
                    </div>

                    <a className="title-font font-medium text-white mb-4 md:mb-0">

                        <a href="#about" className="ml-3 text-xl">
                            Evan Woods
                        </a>

                    </a>

                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <a href="#projects" className="mr-5 hover:text-white text-neutral-400">
                            Portfolio
                        </a>
                    </nav>
                </div>
                <button className='flex flex-wrap'>
                    <a href="#contact" className="mr-5 hover:text-white">
                        <iframe
                            src="https://github.com/sponsors/efwoods/button"
                            title="Sponsor efwoods"
                            height={32}
                            width={114}
                            style={{ border: 0, borderRadius: 6 }}
                        />
                    </a>
                </button>

            </div>
        </header>
    )
}

