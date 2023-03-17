/* eslint-disable react/no-unescaped-entities */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { URL } from '../../utils/config';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [code_postal, setCode] = useState('');
    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');
    function handleSubmit(e) {
        const newsletters = { email, code_postal, salon: 'TGS Montpellier' };
        e.preventDefault();
        fetch(`${URL}/api/newsletters`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                accept:         'application/json',
            },
            body: JSON.stringify(newsletters),
        }).then(async (response) => {
            if (response.ok) {
                const validation = await response.json();
                setSuccess(validation);
            } else if (!response.ok) {
                const validation = await response.json();
                setErrors(validation.errors);
                console.log(validation.errors);
            }
        });
    }

    return (
        <div className="bg-blue-700">
            <div className="max-w-[1400px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                <div className="lg:w-0 lg:flex-1">
                    <h2 className="text-3xl lg:text-4xl text-white font-heading_bold tracking-[0.566667px] leading-[.95] uppercase">Newsletters</h2>
                    <p className="mt-3 max-w-3xl font-bold text-lg leading-6 text-gray-300">Pour rester toujours au courant !</p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                    <form className="sm:flex px-5" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="sr-only">Adresse email</label>
                        <input
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            required
                            className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                            placeholder="Votre adresse email.."
                        />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <label htmlFor="code_postal" className="sr-only">Code postal</label>
                            <input
                                id="code_postal"
                                name="code_postal"
                                value={code_postal}
                                onChange={(e) => {
                                    setCode(e.target.value);
                                }}
                                type="number"
                                required
                                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                                placeholder="Votre code postal.."
                            />
                        </div>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">Envoyer</button>
                        </div>
                    </form>
                    <p className="mt-3 lg:ml-5 text-sm text-gray-300">
                        {errors ? (
                            <p className="text-red-900">Email ou code postale non valide, (exemple code postale : 31000)</p>
                        ) : success && (
                            <p className="text-green-500">Inscription prise en compte</p>
                        )}
                        Nous nous soucions de la protection de vos données. Lisez notre
                        <a href="/" className="text-white font-medium underline"> Politique de confidentialité. </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
