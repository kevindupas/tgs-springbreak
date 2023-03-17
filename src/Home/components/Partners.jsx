/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/order */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Loader from '../../components/Loader';
import { SALON_ID, URL } from '../../utils/config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Arrow(props) {
    const { onClick, type } = props;
    let className = type === 'next' ? 'nextArrow' : 'prevArrow';
    className += ' arrow z-50';
    const char = type === 'next' ? <FontAwesomeIcon icon={faChevronRight} /> : <FontAwesomeIcon icon={faChevronLeft} />;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            {char}
        </div>
    );
}

export default function PartnerTest() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [partners, setPartners] = useState([]);

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

        fetch(`${URL}/api/salon/${SALON_ID}}/partners`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPartners(data.data);
                },
                (err) => {
                    setIsLoaded(true);
                    setError(err);
                },
            );
    }, []);

    const falseElements = !!partners && partners.filter((element) => element.sponsors === false);
    const numberOfFalseElements = falseElements.length;

    console.log(numberOfFalseElements <= 3 ? 'GRID' : 'SLIDER'); // affiche 3

    const settings = {
        dots:           false,
        arrows:         true,
        infinite:       true,
        speed:          500,
        slidesToShow:   4,
        slidesToScroll: 1,
        autoplay:       true,
        autoplaySpeed:  2000,
        nextArrow:      <Arrow className="right-14 z-50" type="next" />,
        prevArrow:      <Arrow className="left-14 z-50" type="prev" />,
        responsive:     [
            {
                breakpoint: 1024,
                settings:   {
                    slidesToShow:   3,
                    slidesToScroll: 1,
                    infinite:       true,
                    dots:           false,
                },
            },
            {
                breakpoint: 600,
                settings:   {
                    slidesToShow:   2,
                    slidesToScroll: 1,
                    initialSlide:   2,
                },
            },
            {
                breakpoint: 480,
                settings:   {
                    slidesToShow:   1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if (error) {
        return (
            <div>
                Error:
                {error.message}
            </div>
        );
    } if (!isLoaded) {
        return (
            <Loader />
        );
    } if (partners) {
        return (
            <>
                <div className="bg-white py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                            <div className="mx-auto w-full max-w-xl lg:mx-0">
                                <h2 className="text-4xl font-bold tracking-tight text-gray-900 uppercase w-56 font-heading_bold">Nos partenaires majeurs</h2>
                            </div>
                            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                                {partners.map((value) => {
                                    if (value.sponsors === true) {
                                        return (
                                            <img
                                                className="w-auto h-52 border"
                                                src={URL + value.image}
                                                alt="Tuple"
                                                width={105}
                                                height={48}
                                            />
                                        );
                                    }

                                    return null;
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-12">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2">
                                {numberOfFalseElements <= 3 ? (
                                    <div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                                        {partners.map((value) => {
                                            if (value.sponsors === false) {
                                                return (
                                                    <img
                                                        className="px-6 h-24 w-auto"
                                                        src={URL + value.image}
                                                        alt="Tuple"
                                                        width={105}
                                                        height={48}
                                                    />
                                                );
                                            }

                                            return null;
                                        })}
                                    </div>
                                ) : (
                                    <Slider {...settings}>
                                        {partners.map((value, index) => {
                                            if (value.sponsors === false) {
                                                return (
                                                    <img
                                                        key={index}
                                                        src={URL + value.image}
                                                        alt="dd"
                                                        className="px-12 z-30"
                                                    />
                                                );
                                            }
                                            return null;
                                        })}
                                    </Slider>

                                )}

                            </div>
                            <div className="flex justify-end items-center">
                                <Link
                                    to="partenaires"
                                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white uppercase shadow-sm hover:bg-blue-700"
                                >
                                    tous les partenaires
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
