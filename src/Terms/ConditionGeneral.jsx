/* eslint-disable react/no-danger */
import React from 'react';
import { useSettings } from '../context/ConfigurationContext';

export default function ConditionGeneral() {
    const { config } = useSettings();

    return (
        <div className="relative overflow-hidden bg-white py-16 mt-32">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            Condition Générale
                        </span>
                    </h1>
                </div>
                <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                    <div dangerouslySetInnerHTML={{ __html: config.cgu }} />
                </div>
            </div>
        </div>
    );
}
