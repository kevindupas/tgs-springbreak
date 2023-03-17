/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSettings } from '../context/ConfigurationContext';

export default function Presse() {
    const { config } = useSettings();
    return (
        <div className="py-16">
            <div className="mx-auto">
                <div className="relative isolate overflow-hidden bg-gray-900 py-20 px-6 sm:py-24 sm:px-10 lg:py-24 xl:px-24">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                        <div className="lg:row-start-2 lg:max-w-md">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Accéder à notre espace presse
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Toutes nos assets sont disponible dessus, si vous avez des questions vous pouvez nous contacter à l'adresse suivante :
                                <a className="font-bold" href="mailto:contact@tgsevenements.com"> contact@tgsevenements.com</a>
                            </p>
                        </div>
                        <img
                            src="/dist/images/presse.png"
                            alt="Product screenshot"
                            className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                            width={2432}
                            height={1442}
                        />
                        <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                            <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                <a
                                    href={config.presse_kit}
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Accéder au kit de presse
                                </a>
                            </dl>
                        </div>
                    </div>
                    <svg
                        className="pointer-events-none absolute top-1/2 left-12 -z-10 h-[42.375rem] -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:bottom-[-12rem] lg:translate-y-0"
                        viewBox="0 0 1155 678"
                        fill="none"
                    >
                        <path
                            fill="url(#c0458c57-1330-459f-9d5c-f0d75c210466)"
                            fillOpacity=".25"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="c0458c57-1330-459f-9d5c-f0d75c210466"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC" />
                                <stop offset={1} stopColor="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}
