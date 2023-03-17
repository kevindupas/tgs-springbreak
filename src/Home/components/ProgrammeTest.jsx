/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// noinspection JSValidateTypes

import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
// import { usePostHome } from '../context/PostHomeContext';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import { URL } from '../../utils/config';
import { useSettings } from '../../context/ConfigurationContext';

export default function ProgrammeTest({
    category,
    salon,
    tag,
    limit,
}) {
    const { settings } = useSettings();
    const [invites, setInvites] = useState([]);
    // const [storage, setStorage] = useLocalStorage('invitesHome', null);

    useEffect(() => {
        async function fetchData() {
            const options = { method: 'GET' };
            fetch(`${URL}/api/posts/categories/${category}/salon/${salon}`, options)
                .then((response) => response.json())
                .then((json) => setInvites(json.data))
                .catch((err) => console.error(err));
        }

        fetchData()
            .then((r) => r);
    }, []);

    return (
    // TODO: Modifier les nombres dans l'admin salon
        <section className="relative w-full py-16 bg-[#f3f3f3]">

            <div className="lg:max-w-[1200px] lg:w-[calc(100%-30px)] mx-auto flex justify-start items-start flex-wrap">

                <div className="mx-auto max-w-2xl mb-10">
                    <h1 className="mb-2 text-center font-heading_bold text-[27px] lg:text-[48px] tracking-[0.566667px] leading-[.95] uppercase text-black">Programmes</h1>
                    <hr className="relative lg:left-0 w-[calc(100% + 130px)]" />
                </div>
                <div
                    className="w-full lg:w-full h-full flex mx-auto justify-center items-center relative"
                >
                    {/* <button type="button" onClick={() => inputEl.slidePrev()}>Prev</button>
                        <button type="button" onClick={() => inputEl.slideNext()}>Next</button> */}
                    <Carousel>
                        {invites && invites.map((data) => {
                            if (data.forward === true && data.published_at !== null && data.published_at < dayjs().format('YYYY-MM-DD H:s')) {
                                return (

                                    <Link className="mx-4" key={data.id} to={`/post/${data.id}`}>
                                        <div className="news-card">
                                            <img src={URL + data.image} alt={data.name} className="news-card__image" />
                                            <div className="news-card__text-wrapper w-full">
                                                <h2 className="news-card__title">{data.name}</h2>
                                                <div className="news-card__post-date">{data.tag.name}</div>
                                                <div className="news-card__details-wrapper">
                                                    <div className="news-card__excerpt">
                                                        <ul className="flex space-x-4 mt-4">
                                                            {
                                                                data.facebook !== null && (
                                                                    <li>
                                                                        <a href={data.facebook} className="text-gray-400 hover:text-gray-500">
                                                                            <span className="sr-only">LinkedIn</span>
                                                                            <img className="w-5 h-auto" src="../dist/icons/facebook.svg" alt="" />
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
                                                                                <img className="w-6 h-auto" src="../dist/icons/twitter.svg" alt="" />
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
                                                                                <img className="w-7 h-auto" src="../dist/icons/youtube.svg" alt="" />
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
                                                                                <img className="w-6 h-auto" src="../dist/icons/instagram.svg" alt="" />
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
                                                                            <img className="w-6 h-auto" src="../dist/icons/twitch.svg" alt="" />
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            )}

                                                            { data.website !== null && (
                                                                <li>
                                                                    <a href={data.website} className="text-gray-400 hover:text-gray-500">
                                                                        <span className="sr-only">LinkedIn</span>
                                                                        <img className="w-6 h-auto" src="../dist/icons/web.svg" alt="" />
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
                                                                            <img className="w-5 h-auto" src="../dist/icons/tiktok.svg" alt="" />
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
                                                    </div>
                                                    <Link className="news-card__read-more bg-black hover:bg-blue-400 text-[#1eabe8] hover:text-black" to={`/post/${data.id}`}>
                                                        En savoir plus
                                                        {/* <i className="fas fa-long-arrow-alt-right text-blue-600" /> */}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                );
                            }

                            return null;
                        })}
                        <Link className="mx-4" to="programmes">
                            <div className="news-card">
                                <img src="/dist/images/more-pro.png" alt="dd" className="news-card__image" />
                                <div className="news-card__text-wrapper w-full">
                                    <h2 className="news-card__title">Voir plus de programmes</h2>
                                    {/* <div className="news-card__post-date">effez</div> */}
                                </div>
                            </div>
                        </Link>
                    </Carousel>

                </div>

            </div>
        </section>
    );
}
