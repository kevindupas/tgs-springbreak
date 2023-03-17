/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSettings } from '../../context/ConfigurationContext';
import { URL } from '../../utils/config';

export default function SalonMobile() {
    const { config } = useSettings();

    if (!config || Object.entries(config).length === 0) return null;

    return (

        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-[#F3F3F3] flex items-end justify-end">
                <div className="relative isolate overflow-hidden">
                    <div className="max-w-7xl pt-10 lg:py-36">
                        <div className="mt-20 sm:mt-24 md:mx-auto lg:mx-0 lg:mt-0">
                            <h1 className="font-heading_bold absolute tracking-[0.566667px] text-3xl leading-[.95] w-full text-center top-4 uppercase text-white artiste py-4 bg-zinc-900">
                                <span>LE SALON DE LA POP CULTURE</span>
                            </h1>
                            <div className="shadow-lg md:rounded-3xl">
                                <img
                                    className="w-full overflow-hidden lg:max-w-max"
                                    src={URL + config.footer_image}
                                    alt="MEETT - Parc des Expositions et Centre de Conventions de Toulouse Métropole"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 flex items-center justify-center">
                <div className="relative isolate overflow-hidden">
                    <div className="max-w-7xl">
                        <div className="sm:mt-24 md:mx-auto lg:mx-0 lg:mt-0 pt-10">

                            <h1 className="mb-2 text-center font-heading_bold text-[35px] lg:text-[45px] tracking-[0.566667px] leading-[.95] uppercase">À DÉCOUVRIR</h1>
                            <hr className="relative lg:left-0 w-[calc(100% + 130px)] my-4" />

                            <table className="min-w-full">
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap pl-4 pr-3 text-right font-medium text-gray-900 sm:pl-6 artiste-black text-3xl font-heading_bold tracking-[0.566667px] leading-[.95] uppercase pt-6">{config.halls}</td>
                                        <td className="whitespace-nowrap px-3 pt-[25px] text-black flex-shrink-0 font-heading_bold font-semibold text-xl tracking-[0.566667px] leading-[.95] uppercase">m²</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap pl-4 pr-3 text-right font-medium text-gray-900 sm:pl-6 artiste-black text-3xl font-heading_bold tracking-[0.566667px] leading-[.95] uppercase pt-6">{config.exposants}</td>
                                        <td className="whitespace-nowrap px-3 pt-[25px] text-black flex-shrink-0 font-heading_bold font-semibold text-xl tracking-[0.566667px] leading-[.95] uppercase">stands</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap pl-4 pr-3 text-right font-medium text-gray-900 sm:pl-6 artiste-black text-3xl font-heading_bold tracking-[0.566667px] leading-[.95] uppercase pt-6">{config.scenes}</td>
                                        <td className="whitespace-nowrap px-3 pt-[25px] text-black flex-shrink-0 font-heading_bold font-semibold text-xl tracking-[0.566667px] leading-[.95] uppercase">scènes</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="mt-10 mb-4 flex justify-center items-center">
                        <a href="https://photos.tgs-montpellier.fr" target="_blank" className="inline-block text-center cursor-pointer py-5 px-11" rel="noreferrer">
                            <button
                                type="button"
                                className="rounded-lg bg-blue-500 py-2.5 px-3.5 text-3xl border-2 text-white shadow-sm uppercase font-bold"
                            >
                                Découvrir le salon
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
