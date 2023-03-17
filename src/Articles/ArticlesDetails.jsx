/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
    Link, useNavigate, useParams,
} from 'react-router-dom';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Loader from '../components/Loader';
import { SALON_ID, URL } from '../utils/config';

const Wrapper = styled.div`
  .Video {
    width: 100%;
    height: 100vh;
  }

  img {
    display: block;
    margin-bottom: 20px;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 600;
    font-size: 42px;
    white-space: nowrap;
  }
`;

export default function ArticlesDetails() {
    const { postId } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [details, setDetails] = useState([]);
    const [detailCategory, setDetailCategory] = useState([]);
    const [detailAvailability, setDetailAvailability] = useState([]);
    const [detailTag, setDetailTag] = useState([]);
    const navigate = useNavigate();

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
        fetch(`${URL}/api/post/${postId}`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setIsLoaded(true);
                    setDetails(data.data);
                    setDetailCategory(data.data.category);
                    setDetailAvailability(data.data.availability);
                    setDetailTag(data.data.tag);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    const videoOptions = {
        playerVars: {
            autoplay: 0,
            controls: 0,
            height:   570,
            width:    1024,
            rel:      0,
            showinfo: 0,
            mute:     0,
            loop:     0,
        },
    };

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

    if (details) {
        return (
            <div className="bg-[#f3f3f3]">
                <section className="overflow-hidden pb-0 lg:pb-6">
                    <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto">
                        <div className="relative mt-[76px]">
                            <div className="ml-[-20px] lg:ml-auto w-[calc(100%+40px)] lg:w-[75%] mr-[-118px] overflow-hidden">
                                <div className="relative overflow-hidden pb-[56%]">
                                    <img className="absolute top-0 left-0 w-full h-full object-cover" src={details.image_details !== null ? URL + details.image_details : '/dist/images/test.png'} alt="" loading="lazy" />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-12 m-auto flex items-end">
                                <h1 className="text-black text-[28px] mb-[-46px] lg:mb-[21px] lg:text-[50px] font-microgramma uppercase bg-white px-4 py-1">
                                    {details.name}
                                </h1>
                            </div>
                        </div>
                        <div className="my-12 border-2 border-black h-1" />
                        <div>
                            <div className="flex justify-between lg:justify-start w-full text-[25px] lg:text-[40px] font-tungsten font-semibold tracking-[0.566667px] leading-[.95] uppercase">
                                <p className="relative lg:pr-4 lg:mr-3">
                                    {detailAvailability.name}
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center my-3">
                                <ul className="flex list-none m-0 p-0 space-x-4">
                                    <li className="border border-white py-3 px-3 lg:py-3 lg:px-7 bg-white text-black mt-5 font-bold uppercase">
                                        {detailCategory.name}

                                    </li>
                                    <li className="border border-white py-3 px-3 lg:py-3 lg:px-7 bg-white text-black mt-5 font-bold uppercase">
                                        {detailTag.name}
                                    </li>
                                </ul>
                                <ul className="flex justify-center items-center list-none space-x-6 lg:space-x-10  ml-auto w-full lg:w-auto my-8 lg:my-auto">
                                    {
                                        details.facebook !== null && (
                                            <li>
                                                <a href={details.facebook} target="_blank" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <img className="w-7 h-auto" src="../dist/icons/facebook_article.png" alt="" />
                                                </a>
                                            </li>
                                        )
                                    }

                                    {
                                        details.twitter !== null && (
                                            <li className="">
                                                <a
                                                    href={details.twitter}
                                                    target="_blank"
                                                    className="w-7 block"
                                                    rel="noreferrer"
                                                >
                                                    <div className="flex items-center w-full h-auto">
                                                        <img className="w-10 h-auto" src="../dist/icons/twitter_article.png" alt="" />
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }

                                    {
                                        details.youtube !== null && (
                                            <li className="">
                                                <a
                                                    href={details.youtube}
                                                    target="_blank"
                                                    className="w-8 block"
                                                    rel="noreferrer"
                                                >
                                                    <div className="flex items-center w-full h-auto">
                                                        <img className="w-9 h-auto" src="../dist/icons/youtube_article.png" alt="" />
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }

                                    {
                                        details.instagram !== null && (
                                            <li className="">
                                                <a
                                                    href={details.instagram}
                                                    target="_blank"
                                                    className="w-7 block"
                                                    rel="noreferrer"
                                                >
                                                    <div className="flex items-center w-full h-auto">
                                                        <img className="w-7 h-auto" src="../dist/icons/instagram_article.png" alt="" />
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }

                                    { details.twitch !== null && (
                                        <li className="">
                                            <a
                                                href={details.twitch}
                                                target="_blank"
                                                className="w-7 block"
                                                rel="noreferrer"
                                            >
                                                <div className="flex items-center w-10 h-auto">
                                                    <img className="w-7 h-auto" src="../dist/icons/twitch_article.png" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                    )}

                                    { details.wikipedia !== null && (
                                        <li className="">
                                            <a
                                                href={details.wikipedia}
                                                target="_blank"
                                                className="w-8 block"
                                                rel="noreferrer"
                                            >
                                                <div className="flex items-center w-8 mt-1 h-auto">
                                                    <img className="w-8 h-auto" src="../dist/icons/wikipedia_article.png" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                    )}

                                    { details.website !== null && (
                                        <li>
                                            <a href={details.website} target="_blank" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                                                <span className="sr-only">Website</span>
                                                <img className="w-7 h-auto" src="../dist/icons/web.svg" alt="" />
                                            </a>
                                        </li>
                                    )}

                                    { details.tiktok !== null && (
                                        <li className="">
                                            <a
                                                href={details.tiktok}
                                                target="_blank"
                                                className="w-7 block"
                                                rel="noreferrer"
                                            >
                                                <div className="flex items-center w-7 h-auto">
                                                    <img className="w-6 h-auto" src="../dist/icons/tiktok_article.png" alt="" />
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
                        </div>
                    </div>

                </section>
                <section className="pb-2 bg-white">
                    <div className="flex-none lg:flex w-full lg:max-w-[1200px] lg:w-[calc(100%-30px)] lg:mx-auto">

                        {details.plannings.map((planning) => (
                            planning.salon_id === SALON_ID
                                ? (
                                    <div key={planning + SALON_ID} className="w-full lg:w-96 h-full bg-white mt-9 border border-gray-400 shadow-lg rounded-lg">
                                        <div className="relative p-6 space-y-6 lg:p-8">
                                            <h3 className="text-3xl text-center text-blue-500 uppercase font-bold underline">Infos planning</h3>
                                            <div />
                                            <ul className="w-max space-y-4 py-6 m-auto text-gray-600">
                                                <li className="space-x-2">
                                                    {/* <span className="text-black font-semibold">{ planning.name}</span> */}
                                                    <div dangerouslySetInnerHTML={{ __html: planning.information }} />
                                                </li>
                                            </ul>

                                            <Link to="/billetterie" className="block w-full py-3 px-6 text-center rounded-xl transition bg-blue-600 hover:bg-blue-700">
                                                <span className="text-white font-semibold">
                                                    Acheter vos billets
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                )
                                : null

                        ))}
                        <div className="flex w-full px-5 lg:px-20 pb-[40px] mt-9">
                            <div dangerouslySetInnerHTML={{ __html: details.content }} />
                        </div>

                    </div>
                    {/* <div className="relative h-0 pb-[53%] mx-10 mb-14 lg:w-[75%]">
                        <div className="discoverImageWrapper">
                            <div className="discoverImageContain">
                                <img className="discoverImage overflow-hidden lg:max-w-max" src="/dist/images/test.png" alt="MEETT - Parc des Expositions et Centre de Conventions de Toulouse Métropole" />
                            </div>
                        </div>
                    </div> */}
                    <div className="flex justify-center items-center w-full lg:max-w-[1200px] lg:w-[calc(100%-30px)] mx-auto my-12">
                        <Carousel>
                            {details.images.map((data) => {
                                if (data.image !== null) {
                                    return (
                                        <div key={data + postId} className="flex justify-center items-center mb-6 mx-6">
                                            <img
                                                className="shadow-xl"
                                                src={URL + data.image}
                                                alt=""
                                            />
                                        </div>
                                    );
                                }

                                return null;
                            })}
                        </Carousel>
                    </div>
                    <div className="flex justify-center items-center w-full lg:max-w-[1200px] lg:w-[calc(100%-30px)] mx-auto my-12">
                        {details.video !== null && (
                            <Wrapper>
                                <YouTube
                                    videoId={details.video}
                                    opts={videoOptions}
                                />
                            </Wrapper>
                        )}

                    </div>
                    <div className="block my-10">
                        <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto">
                            <hr className="relative lg:left-0 w-[calc(100% + 130px)]" />
                            <div className="my-8">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-500"
                                    onClick={() => navigate(-1)}
                                >
                                    <img className="-ml-1 mr-3 h-5 w-5" src="../dist/images/arrow-left-long-solid.svg" alt="" />
                                    Revenir en arrière
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <BeforeFooter /> */}
            </div>
        );
    }
}
