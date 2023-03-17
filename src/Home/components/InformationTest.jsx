/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import { useSettings } from '../../context/ConfigurationContext';
import { URL } from '../../utils/config';

export default function InformationTest() {
    const { config } = useSettings();

    const [showPlan, setShowPlan] = useState(false);
    const [showPlanning, setShowPlanning] = useState(false);
    return (
        <section className="relative py-16 bg-[url('/dist/images/pattern-semi-dark.png')] sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-white font-heading_bold text-xl lg:text-4xl uppercase tracking-wide text-center">Organisez-vous pour ne rien rater !</h2>
                </div>
                <ul
                    className="mx-auto mt-10 lg:mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
                >
                    <Link to="faqs">
                        <div className="mx-auto w-28 h-28 lg:h-56 lg:w-56 rounded-full bg-blue-600 flex justify-center items-center hover:scale-105">
                            <img src="/dist/icons/faq.svg" width="50%" className="mx-auto" alt="" />
                        </div>
                        <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-white uppercase">FAQ</h3>
                    </Link>
                    {
                        config.plan_pdf !== '' ? (

                            <a href={URL + config.plan_pdf} target="_blank" rel="noreferrer">
                                <div className="mx-auto w-28 h-28 lg:h-56 lg:w-56 rounded-full bg-blue-600 flex justify-center items-center hover:scale-105">
                                    <img src="/dist/icons/plan.svg" width="50%" className="mx-auto" alt="" />
                                </div>
                                <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-white uppercase">Plan salon</h3>
                            </a>

                        ) : (
                            <>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowPlan(true);
                                    }}
                                >
                                    <div className="mx-auto w-28 h-28 lg:h-56 lg:w-56 rounded-full bg-blue-600 flex justify-center items-center hover:scale-105">
                                        <img src="/dist/icons/plan.svg" width="50%" className="mx-auto" alt="" />
                                    </div>
                                    <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-white uppercase">Plan du salon</h3>
                                </button>
                                {showPlan && (
                                    <Modal
                                        setOpenModal={setShowPlan}
                                        title="Plan du salon non disponible"
                                        description="Le plan sera disponible dans quelques jours, encore un peu de patience"
                                    />
                                )}

                            </>

                        )

                    }
                    {
                        config.planning_pdf !== '' ? (

                            <a href={URL + config.planning_pdf} target="_blank" rel="noreferrer">
                                <div className="mx-auto w-28 h-28 lg:h-56 lg:w-56 rounded-full bg-blue-600 flex justify-center items-center hover:scale-105">
                                    <img src="/dist/icons/planning.svg" width="50%" className="mx-auto" alt="" />
                                </div>
                                <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-white uppercase">Planning</h3>
                            </a>

                        ) : (
                            <>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowPlanning(true);
                                    }}
                                >
                                    <div className="mx-auto w-28 h-28 lg:h-56 lg:w-56 rounded-full bg-blue-600 flex justify-center items-center hover:scale-105">
                                        <img src="/dist/icons/planning.svg" width="50%" className="mx-auto" alt="" />
                                    </div>
                                    <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-white uppercase">Planning</h3>
                                </button>
                                {showPlanning && (
                                    <Modal
                                        setOpenModal={setShowPlanning}
                                        title="Planning du salon non disponible"
                                        description="Le planning sera disponible dans quelques jours, encore un peu de patience"
                                    />
                                )}

                            </>

                        )

                    }
                    <Link to="informations-pratiques">
                        <div className="mx-auto w-28 h-28 lg:h-56 lg:w-56 rounded-full bg-blue-600 flex justify-center items-center hover:scale-105">
                            <img src="/dist/icons/info_pratiques.svg" width="50%" className="mx-auto" alt="" />
                        </div>
                        <h3 className="mt-6 text-base font-heading_bold font-semibold leading-7 tracking-tight text-white uppercase">Infos Pratiques</h3>
                    </Link>
                </ul>
            </div>
        </section>
    );
}
