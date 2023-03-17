/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// noinspection JSValidateTypes

import React, { useEffect, useState } from 'react';
// import { usePostHome } from '../context/PostHomeContext';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import { useSettings } from '../../context/ConfigurationContext';
import { URL } from '../../utils/config';

function ProgrammesHome({
    category,
    salon,
    tag,
    limit,
}) {
    const { config } = useSettings();
    const [programmes, setProgrammes] = useState([]);
    // const [storage, setStorage] = useLocalStorage('invitesHome', null);

    useEffect(() => {
        async function fetchData() {
            const options = { method: 'GET' };
            fetch(`${URL}/api/posts/categories/${category}/salon/${salon}?limit=${limit}`, options)
                .then((response) => response.json())
                .then((json) => setProgrammes(json.data))
                .catch((err) => console.error(err));
        }

        fetchData()
            .then((r) => r);
    }, []);

    return (
        <section className="relative w-full py-16 sm:py-24 bg-zinc-900">

            <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto flex justify-start items-start flex-wrap">

                <div
                    className="grid grid-cols-1 gap-4 mx-auto lg:flex justify-center items-center w-full h-full space-x-0 lg:space-x-10"
                >
                    <div className="mx-auto">

                        <div className="mr-0 relative z-10 text-white">

                            {/* <p className="text-base mb-2 ml-28 font-semibold uppercase">artistes</p> */}
                            <h1 className="mb-2 text-center font-heading_bold text-[40px] lg:text-[40px] tracking-[0.566667px] leading-[.95] uppercase">Programmes</h1>
                            <hr className="relative lg:left-0 w-[calc(100% + 130px)] my-4" />

                            <table className="min-w-full">
                                <tbody>
                                    <tr>
                                        <td className="whitespace-nowrap pl-4 pr-3 text-right text-sm font-medium text-gray-900 sm:pl-6 artiste text-[40px] lg:text-[68px] font-heading_bold tracking-[0.566667px] leading-[.95] uppercase">400</td>
                                        <td className="whitespace-nowrap px-3 pt-[25px] text-sm text-white flex-shrink-0 font-tungstenb_semibold font-semibold text-[45px] tracking-[0.566667px] leading-[.95] uppercase">exposants</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap pl-4 pr-3 text-right text-sm font-medium text-gray-900 sm:pl-6 artiste text-[40px] lg:text-[68px] font-heading_bold tracking-[0.566667px] leading-[.95] uppercase">{ config.associations }</td>
                                        <td className="whitespace-nowrap px-3 pt-[25px] text-sm text-white flex-shrink-0 font-tungstenb_semibold font-semibold text-[45px] tracking-[0.566667px] leading-[.95] uppercase">associations</td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap pl-4 pr-3 text-right text-sm font-medium text-gray-900 sm:pl-6 artiste text-[40px] lg:text-[68px] font-heading_bold tracking-[0.566667px] leading-[.95] uppercase">{ config.animations }</td>
                                        <td className="whitespace-nowrap px-3 pt-[25px] text-sm text-white flex-shrink-0 font-tungstenb_semibold font-semibold text-[45px] tracking-[0.566667px] leading-[.95] uppercase">animations</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* <table className="min-w-full">
                                <tbody>
                                    <tr>
                                        <td className="artiste text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase">{ settings.exposants }</td>
                                        <td className="flex-shrink-0 whitespace-nowrap font-tungstenb_semibold font-semibold text-[45px] tracking-[0.566667px] leading-[.95] uppercase">exposants</td>
                                    </tr>
                                    <tr>
                                        <td className="artiste text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase">{ settings.associations }</td>
                                        <td className="flex-shrink-0 whitespace-nowrap font-tungstenb_semibold font-semibold text-[45px] tracking-[0.566667px] leading-[.95] uppercase">associations</td>
                                    </tr>
                                    <tr>
                                        <td className="artiste text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase">{ settings.animations }</td>
                                        <td className="flex-shrink-0 whitespace-nowrap font-tungstenb_semibold font-semibold text-[45px] tracking-[0.566667px] leading-[.95] uppercase">animations</td>
                                    </tr>
                                </tbody>
                            </table> */}

                            {/* <ul className="flex flex-col items-start list-none pl-0 m-0">

                                {' '}
                                <li className="font-tungstenb_semibold font-semibold text-[38px] tracking-[0.566667px] leading-[.95] uppercase">
                                    <span
                                        className="artiste text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase"
                                    >
                                        300
                                    </span>
                                    {' '}
                                    exposants
                                </li>
                                {' '}
                                <li className="font-tungstenb_semibold font-semibold text-[38px] tracking-[0.566667px] leading-[.95] uppercase">
                                    <span
                                        className="artiste text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase"
                                    >
                                        50
                                    </span>
                                    {' '}
                                    associations
                                </li>
                                <li className="font-tungstenb_semibold font-semibold text-[38px] tracking-[0.566667px] leading-[.95] uppercase">
                                    <span
                                        className="artiste text-[40px] lg:text-[68px] font-microgramma tracking-[0.566667px] leading-[.95] uppercase"
                                    >
                                        25
                                    </span>
                                    {' '}
                                    animations
                                </li>

                            </ul> */}

                        </div>

                        <div className="py-[30px] lg:py-[43px] flex justify-center items-center">
                            <Link to="programmes" className="inline-block text-center cursor-pointer bg-white py-5 px-11">
                                <span className="text-black uppercase font-semibold">Liste complète</span>
                                {' '}
                            </Link>
                        </div>

                    </div>
                    <div
                        className="w-full lg:w-full h-full flex mx-auto justify-center items-center relative lg:left-20"
                    >
                        {/* <button type="button" onClick={() => inputEl.slidePrev()}>Prev</button>
                        <button type="button" onClick={() => inputEl.slideNext()}>Next</button> */}
                        <Carousel>
                            {programmes && programmes.map((data) => (
                                <Link className="mx-4" key={data.id} to={`/post/${data.id}`}>
                                    <div className="news-card">
                                        <img src={URL + data.image} alt={data.name} className="news-card__image" />
                                        <div className="news-card__text-wrapper w-full">
                                            <h2 className="news-card__title">{data.name}</h2>
                                            <div className="news-card__post-date">{data.tag.name}</div>
                                            <div className="news-card__details-wrapper">
                                                <p className="news-card__excerpt">
                                                    <ul className="flex space-x-4 mt-4">
                                                        {
                                                            data.facebook !== null && (
                                                                <li>
                                                                    <a href={data.facebook} className="text-gray-400 hover:text-gray-500">
                                                                        <span className="sr-only">LinkedIn</span>
                                                                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                                clipRule="evenodd"
                                                                            />
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            )
                                                        }

                                                        {
                                                            data.twitter !== null && (
                                                                <li className="">
                                                                    <a
                                                                        href={data.twitter}
                                                                        target="_blank"
                                                                        className="w-7 block"
                                                                        rel="noreferrer"
                                                                    >
                                                                        <div className="flex items-center w-full h-auto">
                                                                            <img src="../dist/icons/twitter.svg" alt="" />
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            )
                                                        }

                                                        {
                                                            data.youtube !== null && (
                                                                <li className="">
                                                                    <a
                                                                        href={data.youtube}
                                                                        target="_blank"
                                                                        className="w-8 block"
                                                                        rel="noreferrer"
                                                                    >
                                                                        <div className="flex items-center w-full h-auto">
                                                                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                                <path
                                                                                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            )
                                                        }

                                                        {
                                                            data.instagram !== null && (
                                                                <li className="">
                                                                    <a
                                                                        href={data.instagram}
                                                                        target="_blank"
                                                                        className="w-7 block"
                                                                        rel="noreferrer"
                                                                    >
                                                                        <div className="flex items-center w-full h-auto">
                                                                            <img src="../dist/icons/instagram.svg" alt="" />
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            )
                                                        }

                                                        { data.twitch !== null && (
                                                            <li className="">
                                                                <a
                                                                    href={data.twitch}
                                                                    target="_blank"
                                                                    className="w-7 block"
                                                                    rel="noreferrer"
                                                                >
                                                                    <div className="flex items-center w-10 h-auto">
                                                                        <img src="../dist/icons/twitch.svg" alt="" />
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        )}

                                                        { data.website !== null && (
                                                            <li>
                                                                <a href={data.website} className="text-gray-400 hover:text-gray-500">
                                                                    <span className="sr-only">LinkedIn</span>
                                                                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                </a>
                                                            </li>
                                                        )}

                                                        { data.tiktok !== null && (
                                                            <li className="">
                                                                <a
                                                                    href={data.tiktok}
                                                                    target="_blank"
                                                                    className="w-7 block"
                                                                    rel="noreferrer"
                                                                >
                                                                    <div className="flex items-center w-7 h-auto">
                                                                        <img src="../dist/icons/tiktok.svg" alt="" />
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        )}
                                                        {/* <li>
                                                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Twitter</span>
                                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">LinkedIn</span>
                                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </li> */}
                                                    </ul>
                                                </p>
                                                <Link className="news-card__read-more" to={`/post/${data.id}`}>
                                                    En savoir plus
                                                    {/* <i className="fas fa-long-arrow-alt-right" /> */}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </Carousel>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default ProgrammesHome;
