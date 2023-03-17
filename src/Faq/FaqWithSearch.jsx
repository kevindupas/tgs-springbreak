/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import Loader from '../components/Loader';
import CategoryImage from '../components/CategoryImage';
import { FAQ_CATEGORY, SALON_ID, URL } from '../utils/config';

export default function FaqWithSearch() {
    const [faq, setFaq] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

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
                (err) => {
                    setIsLoaded(true);
                    setError(err);
                },
            );
    }, []);

    const sortedData = _.sortBy(faq, 'sorting');

    const filteredFaqs = sortedData.filter((value) => value.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 pb-8">Questions fréquemment posées</h2>
                            <div className="relative">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="pointer-events-none absolute top-6 left-4 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    className="h-16  w-full shadow-sm border-1 dark:border-slate-800 bg-white rounded-md pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                />
                            </div>
                            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                                {filteredFaqs.map((value) => (
                                    <Disclosure as="div" key={value.id} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                        <span className="text-base font-semibold leading-7">{value.name}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <FontAwesomeIcon icon={faMinus} className=" h-5 w-5 text-gray-400" />
                                                            ) : (
                                                                <FontAwesomeIcon icon={faPlus} className="h-5 w-5 text-gray-400" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                    <div className="text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{ __html: value.content }} />
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
