/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { URL } from '../utils/config';

export default function InfosPratiquesDetails() {
    const { infoId } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [details, setDetails] = useState([]);

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
        fetch(`${URL}/api/info/${infoId}`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setIsLoaded(true);
                    setDetails(data.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

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
            <div>
                <section className="h-[564px] lg:h-[calc(100vh-100px)] relative overflow-hidden bg-black">
                    <div
                        className="relative z-10 max-w-[1200px] w-[calc(100%-30px)] mx-auto h-full flex items-end"
                    >
                        <h1 className="break-word inline-block w-full text-[30px] mb-[50px] lg:mb-[80px] lg:text-[70px] text-white font-microgramma tracking-[0.566667px] leading-[.95] uppercase">
                            {details.name}
                        </h1>
                    </div>
                    <div className="absolute bottom-0 left-0 top-0 m-auto right-0 lg:right-0 overflow-hidden">
                        <div
                            className="w-full h-full relative overflow-hidden"
                        >
                            <img
                                className="w-full h-full object-cover"
                                src={URL + details.image}
                                alt={details.name}
                            />
                        </div>
                    </div>
                </section>
                <section className="pb-10 bg-[#f3f3f3]">
                    <article className="relative">
                        <div className="relative z-10 pt-[100px] pb-[95px] w-full px-8 lg:px-0 overflow-x-hidden lg:max-w-[800px] lg:w-[calc(100%-30px)] mx-auto">
                            <div className="text-black" dangerouslySetInnerHTML={{ __html: details.content }} />
                        </div>

                    </article>
                    <div className="block">
                        <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto">
                            <hr className="relative lg:left-0 w-[calc(100% + 130px)] my-4" />
                            <div className="">
                                <Link
                                    to="/informations-pratiques"
                                    className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-black bg-white"
                                >
                                    <img className="-ml-1 mr-3 h-5 w-5" src="../dist/images/arrow-left-long-solid.svg" alt="" />
                                    Revenir au infos
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <BeforeFooter /> */}
            </div>
        );
    }
}
