/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { URL } from '../utils/config';

export default function Card({ menuPosts }) {
    return (
        <>

            {menuPosts.map((value) => {
                if (value.published_at !== null && value.published_at < dayjs().format('YYYY-MM-DD H:s')) {
                    return (

                        <NavLink className="mx-4 z-0" key={value.id} to={`/post/${value.id}`}>
                            <div className="news-card">
                                <img src={URL + value.image} alt={value.name} className="news-card__image" loading="lazy" />
                                <div className="news-card__text-wrapper w-full">
                                    <h2 className="news-card__title">{value.name}</h2>
                                    <div className="news-card__post-date">{value.tag.name}</div>
                                    <div className="news-card__details-wrapper z-50">
                                        <div className="news-card__excerpt">
                                            <div className="flex space-x-4 mt-4">
                                                {
                                                    value.facebook !== null && (
                                                        <a
                                                            href={value.facebook}
                                                            onClick={(e) => e.stopPropagation()}
                                                            target="_blank"
                                                            className="w-7 block z-50"
                                                            rel="noreferrer"
                                                        >
                                                            <div className="flex items-center w-full h-auto z-50">
                                                                <img className="w-6 h-auto" src="../dist/icons/facebook.svg" alt="" />
                                                            </div>
                                                        </a>
                                                    )
                                                }

                                                {
                                                    value.twitter !== null && (

                                                        <a
                                                            href={value.twitter}
                                                            target="_blank"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-7 block z-50"
                                                            rel="noreferrer"
                                                        >
                                                            <div className="flex items-center w-full h-auto z-50">
                                                                <img className="w-6 h-auto" src="../dist/icons/twitter.svg" alt="" />
                                                            </div>
                                                        </a>

                                                    )
                                                }

                                                {
                                                    value.youtube !== null && (

                                                        <a
                                                            href={value.youtube}
                                                            target="_blank"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-8 block z-50"
                                                            rel="noreferrer"
                                                        >
                                                            <div className="flex items-center w-full h-auto z-50">
                                                                <img className="w-7 h-auto" src="../dist/icons/youtube.svg" alt="" />
                                                            </div>
                                                        </a>

                                                    )
                                                }

                                                {
                                                    value.instagram !== null && (

                                                        <a
                                                            href={value.instagram}
                                                            target="_blank"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-7 block"
                                                            rel="noreferrer"
                                                        >
                                                            <div className="flex items-center w-full h-auto">
                                                                <img className="w-6 h-auto" src="../dist/icons/instagram.svg" alt="" />
                                                            </div>
                                                        </a>

                                                    )
                                                }

                                                { value.twitch !== null && (

                                                    <a
                                                        href={value.twitch}
                                                        target="_blank"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-7 block"
                                                        rel="noreferrer"
                                                    >
                                                        <div className="flex items-center w-10 h-auto">
                                                            <img className="w-6 h-auto" src="../dist/icons/twitch.svg" alt="" />
                                                        </div>
                                                    </a>

                                                )}

                                                { value.wikipedia !== null && (

                                                    <a
                                                        href={value.wikipedia}
                                                        target="_blank"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-7 block"
                                                        rel="noreferrer"
                                                    >
                                                        <div className="flex items-center w-7 mt-1 h-auto">
                                                            <img className="w-7 h-auto" src="../dist/icons/wikipedia.svg" alt="" />
                                                        </div>
                                                    </a>

                                                )}

                                                { value.website !== null && (

                                                    <a
                                                        href={value.website}
                                                        target="_blank"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-7 block"
                                                        rel="noreferrer"
                                                    >
                                                        <div className="flex items-center w-10 h-auto">
                                                            <img className="w-6 h-auto" src="../dist/icons/web.svg" alt="" />
                                                        </div>
                                                    </a>

                                                )}

                                                { value.tiktok !== null && (

                                                    <a
                                                        href={value.tiktok}
                                                        target="_blank"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-7 block"
                                                        rel="noreferrer"
                                                    >
                                                        <div className="flex items-center w-7 h-auto">
                                                            <img className="w-5 h-auto" src="../dist/icons/tiktok.svg" alt="" />
                                                        </div>
                                                    </a>

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
                                            </div>
                                        </div>
                                        <Link className="news-card__read-more bg-black hover:bg-blue-400 text-[#1eabe8] hover:text-black" to={`/post/${value.id}`}>
                                            En savoir plus
                                            <FontAwesomeIcon icon={faLongArrowAltRight} className="text-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </NavLink>

                    );
                }

                return null;
            })}
        </>

    );
}
