/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { URL } from '../utils/config';
import Loader from './Loader';

export default function CategoryImage({ categoryId, categoryName }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [category, setCategory] = useState([]);
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
        fetch(`${URL}/api/categories/${categoryId}`, options)
            .then((res) => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setCategory(data.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, [categoryId, categoryName]);

    if (error) {
        return (
            <div>
                Error:
                {error.message}
            </div>
        );
    }
    if (!category || Object.entries(category).length === 0) {
        return (
            <Loader />
        );
    }

    return (
        <section className="relative h-[calc(100vh-100px)] overflow-hidden">
            <div className="absolute bottom-0 left-0 m-auto right-0 top-0">
                <div className="w-full h-full relative overflow-hidden">
                    {category.id === categoryId ? (
                        <img src={URL + category.image} alt="" className="w-full h-full object-cover blur-[3px] lg:blur-none" loading="lazy" />

                    )
                        : <Loader />}
                </div>
            </div>
            <div className="relative z-10 pb-[40px] lg:pb-[69px] max-w-[1200px] w-[calc(100%-30px)] mx-auto h-full justify-end flex-col flex">
                <h1 className="font-microgramma text-white text-[30px] lg:text-[96px] tracking-[0.566667px] leading-[.95] uppercase">{categoryName}</h1>
            </div>
        </section>
    );
}
