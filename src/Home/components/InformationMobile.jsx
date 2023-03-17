/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useSettings } from '../../context/SettingContext';
// import { URL } from '../../utils/config';

export default function InformationMobile() {
    // const { settings } = useSettings();
    return (
        <section className="relative py-16 bg-[url('/dist/images/pattern-semi-dark.png')] sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-white font-heading_bold text-xl lg:text-4xl uppercase tracking-wide mb-12 text-center">Organisez-vous pour ne rien rater !</h2>
                </div>
                <ul
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
                >
                    <li>
                        <img className="mx-auto h-24 w-24 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Michael Foster</h3>
                        <p className="text-sm leading-6 text-gray-600">Co-Founder / CTO</p>
                    </li>
                    <li>
                        <img className="mx-auto h-24 w-24 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Michael Foster</h3>
                        <p className="text-sm leading-6 text-gray-600">Co-Founder / CTO</p>
                    </li>
                    <li>
                        <img className="mx-auto h-24 w-24 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Michael Foster</h3>
                        <p className="text-sm leading-6 text-gray-600">Co-Founder / CTO</p>
                    </li>
                    <Link to="informations-pratiques">
                        <div className="mx-auto w-28 h-28 rounded-full bg-blue-600 flex justify-center items-center hover:scale-105">
                            <img src="/dist/icons/info_pratiques.svg" width="50%" className="mx-auto" alt="" />
                        </div>
                        <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-white uppercase">Infos Pratiques</h3>
                    </Link>
                </ul>
            </div>
        </section>
    );
}
