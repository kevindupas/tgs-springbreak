/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../context/ConfigurationContext';
import { URL } from '../../utils/config';

export default function Informations() {
    const { config } = useSettings();
    return (
        <section className="relative py-16 bg-[url('/dist/images/pattern-semi-dark.png')] sm:py-20 lg:py-24">

            <div className="max-w-[1200px] mx-8 lg:mx-auto">
                <h2 className="text-white font-heading_bold font-bold text-xl lg:text-4xl uppercase tracking-wide mb-12 text-center">Organisez-vous pour ne rien rater !</h2>
                <div className="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    <Link to="faqs" className="w-full bg-blue-700 hover:scale-105 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8 hidden lg:block">
                            <i className="fa-regular fa-circle-question text-7xl text-white" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">FAQ</p>
                        </div>

                    </Link>

                    <a href={config.plan_pdf !== '' ? URL + config.plan_pdf : '#'} target="_blank" className="w-full bg-blue-700 hover:bg-blue-900  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center" rel="noreferrer">
                        <div className="mb-8 hidden lg:block">
                            <i className="fa-solid fa-map-location-dot text-7xl text-white z-50" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Plan salon</p>
                        </div>

                    </a>

                    <a href={config.planning_pdf !== '' ? URL + config.planning_pdf : '#'} target="_blank" className="w-full bg-blue-700 hover:bg-blue-900  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center" rel="noreferrer">
                        <div className="mb-8 hidden lg:block">
                            <i className="fa-regular fa-calendar-days text-7xl text-white" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Planning</p>
                        </div>

                    </a>

                    <Link to="informations-pratiques" className="w-full bg-blue-700 hover:bg-blue-900  rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                        <div className="mb-8 hidden lg:block">
                            <i className="fa-regular fa-circle-question text-7xl text-white" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Infos Pratiques</p>
                        </div>

                    </Link>

                </div>
            </div>

        </section>
    );
}
