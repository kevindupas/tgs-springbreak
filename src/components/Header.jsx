import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../context/ConfigurationContext';
import { URL } from '../utils/config';

/**
 * @param {{logo:string}} data
 */
function Header({
    navbarOpen,
    setNavbarOpen,
}) {
    const { config } = useSettings();
    return (
        <header className="fixed top-0 w-full py-2 z-40 bg-[url('/dist/images/pattern-dark.jpeg')] bg-repeat">
            <nav className="max-w-[1200px] mx-auto">
                <div className="w-full flex items-center justify-between">
                    {
                        !!config.logo && (
                            <Link
                                to="/"
                                onClick={() => {
                                    setNavbarOpen(false);
                                }}
                            >
                                <img key="logo" className="h-14 w-auto px-4" src={URL + config.logo} alt="" />
                            </Link>
                        )
                    }
                    <div
                        className=" space-x-0 lg:space-x-24 flex justify-center items-center font-tungstenb_semibold font-medium uppercase"
                    >
                        {
                            navbarOpen
                                ? (
                                    <a href="/" className="text-2xl text-white hover:text-[#1eabe8]">  </a>

                                ) : (
                                    <>
                                        <Link
                                            to="exposants"
                                            className="text-2xl tracking-wide lg:block hidden text-white hover:text-[#1eabe8]"
                                        >
                                            {' '}
                                            Exposants
                                        </Link>
                                        <Link
                                            to="programmes"
                                            className="text-2xl tracking-wide lg:block hidden text-white hover:text-[#1eabe8]"
                                        >
                                            {' '}
                                            Programmes
                                        </Link>
                                        <Link
                                            to="invites"
                                            className="text-2xl tracking-wide lg:block hidden text-white hover:text-[#1eabe8]"
                                        >
                                            Invités
                                        </Link>
                                        <Link
                                            to="billetterie"
                                            className="text-2xl tracking-wide lg:block hidden bg-[#1eabe8] px-3 text-white hover:text-black"
                                        >
                                            {' '}
                                            Billetterie
                                        </Link>
                                    </>
                                )
                        }
                        <button
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="text-2xl font-medium px-6 lg:px-0 text-white hover:text-blue-50"
                        >

                            <div className="">
                                {
                                    navbarOpen
                                        ? (
                                            <div className="flex">
                                                <span className="text-2xl text-white">
                                                    Fermer
                                                    &nbsp;
                                                    &nbsp;
                                                </span>
                                                <svg
                                                    className="w-8 h-8 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </div>
                                        )
                                        : (
                                            <svg
                                                className="w-10 h-10 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        )
                                }
                            </div>

                        </button>

                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;
