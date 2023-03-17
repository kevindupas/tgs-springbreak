/* eslint-disable no-console */
/* eslint-disable no-shadow */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader';
import { SALON_ID, URL } from '../../utils/config';

export default function Tickets() {
    const location = useLocation();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        const options = {
            method:  'GET',
            mode:    'cors',
            cache:   'default',
            headers: {
                Accept:         'application/json',
                'Content-Type': 'application/json',
            },
        };
        fetch(`${URL}/api/salon/${SALON_ID}}/prices`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPrices(data.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    // console.log(prices);

    if (error) {
        return (
            <div>
                Error:
                {error.message}
            </div>
        );
    }
    if (!isLoaded) {
        return (
            <Loader />
        );
    }

    if (prices) {
        return (
            <div className="overflow-hidden bg-[#F3F3F3]">
                <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:flex-col sm:align-center">
                        <h1 className="text-3xl font-extrabold text-black sm:text-center uppercase font-heading_bold">
                            Achetez vos billets dès
                            maintenant !
                        </h1>
                    </div>

                    <div
                        className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4 place-items-center"
                    >
                        {
                            prices && (
                                <>
                                    {prices.map((price) => (
                                        <div key={price.id} className={clsx('border-2 bg-gray-100 shadow-lg h-full w-full rounded-lg shadow-sm scale-100 hover:scale-110 ease-in duration-200', price.name === 'VIP' ? 'border-[#1eabe8]' : '')}>
                                            { price.name === 'VIP' && (<span className="absolute flex -top-3 rounded-full px-3 left-0 w-36 right-0 mx-auto justify-center items-center text-white bg-[#1eabe8]">Quantité limitée</span>) }
                                            <div className="p-6">
                                                <h2 className="text-lg leading-6 font-medium text-black uppercase text-center">{price.name}</h2>
                                                <p className="mt-4 text-center">
                                                    <span className="text-4xl font-extrabold text-black text-center">
                                                        {price.price}
                                                        €
                                                    </span>
                                                </p>
                                                {
                                                    price.sold_out !== true ? (
                                                        <div>
                                                            { location.pathname !== '/billetterie' ? (
                                                                <Link
                                                                    to="billetterie"
                                                                    className="mt-8 block w-full bg-[#1eabe8] hover:bg-blue-400 rounded-md py-2 text-sm font-semibold text-white text-center"
                                                                >
                                                                    Réserver

                                                                </Link>

                                                            )

                                                                : (
                                                                    <a
                                                                        href="#div_id"
                                                                        className="mt-8 block w-full bg-[#1eabe8] hover:bg-blue-400 rounded-md py-2 text-sm font-semibold text-white text-center"
                                                                    >
                                                                        Réserver

                                                                    </a>
                                                                )}

                                                        </div>

                                                    ) : (
                                                        <span
                                                            className="mt-8 block w-full bg-gray-600 hover:bg-gray-700 rounded-md py-2 text-sm font-semibold text-white text-center"
                                                        >
                                                            Sold out

                                                        </span>
                                                    )
                                                }
                                            </div>
                                            <div className="py-4 px-6">
                                                {/* <h3 className="text-xs font-medium text-white tracking-wide uppercase">Whats included</h3> */}
                                                <ul className="space-y-2">
                                                    {price.pricings.map((pricing) => (
                                                        <li className="flex space-x-3">
                                                            <svg
                                                                className="flex-shrink-0 h-5 w-5 text-green-500"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <span className="text-xs text-black">{pricing.content}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )
                        }

                    </div>

                </div>
            </div>

        );
    }
}
