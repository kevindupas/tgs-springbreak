/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { FAQ_CATEGORY, SALON_ID, URL } from '../utils/config';
import Loader from '../components/Loader';
import CategoryImage from '../components/CategoryImage';

export default function Faq() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [faq, setFaq] = useState([]);

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

        fetch(`${URL}/api/salon/${SALON_ID}/faqs`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setFaq(data.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    const sortedData = _.sortBy(faq, 'sorting');

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
    } if (faq) {
        return (
            <>

                <CategoryImage categoryId={FAQ_CATEGORY} categoryName="Faqs" />
                <section className="pt-[63px] pb-[128px] bg-black">
                    <div className="max-w-[1200px] w-[calc(100%-30px)] mx-auto">
                        <div className="flex flex-wrap mt-[-20px] ml-[-20px]">
                            {sortedData.map((value) => (
                                <article key={value.id} className="pt-[20px] pl-[20px] w-full lg:w-1/3 lg:basis-auto text-black">
                                    <div className="bg-yellow-50 py-[15px] px-[30px] w-auto h-80 mx-auto my-0">
                                        <div className="flex items-center flex-col">
                                            <img src={URL + value.icone} alt="" className="flex justify-center items-center w-[50px] h-[50px]" />
                                            <h1 className="text-5xl mt-4 text-center font-tungstenb_semibold tracking-[0.566667px] leading-[.95] uppercase">{value.name}</h1>
                                        </div>
                                        <hr className="relative lg:left-0 w-[calc(100% + 130px)] my-4" />
                                        {/* <div className="text-center">
                                            <p>{value.mini_content}</p>
                                        </div> */}
                                        <div className="flex items-center justify-center">
                                            <Link key={value.id} to={`/info/${value.id}`} className="mt-4 text-sm flex items-end font-bold uppercase">
                                                Lire la suite
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <BeforeFooter /> */}
            </>
        );
    }
}
