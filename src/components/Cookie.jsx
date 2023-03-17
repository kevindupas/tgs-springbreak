/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import useLocalStorage from '../utils/useLocalStorage';

export default function Cookie({ storageKey, storageValue }) {
    const [dissmised, setStatus] = useLocalStorage(storageKey, null);

    const close = () => {
        setStatus(false);
        setStatus(storageValue);
    };

    if (dissmised === storageValue) return null;
    return (
        <div className="fixed left-0 bottom-0 z-40 ">

            <div className="fixed sm:left-4 bottom-5 rounded-lg bg-white shadow-2xl w-full sm:w-1/2 xl:w-1/4 max-w-[450px] overflow-hidden">

                <div className="">
                    <div className="relative overflow-hidden px-8 pt-8">
                        <div width="80" height="77" className="absolute -top-10 -right-10 text-yellow-500">
                            <svg width="120" height="119" viewBox="0 0 120 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    opacity="0.3"
                                    d="M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="text-2xl flex flex-col pb-4">
                            <small>Bonjour à tous !</small>
                            <span className="text-3xl font-bold">Nous sommes les cookies</span>
                        </div>
                        <div className="pb-4">
                            <p>
                                En poursuivant votre navigation, vous acceptez le dépôt de cookies tiers destinés à vous proposer des vidéos, des boutons de partage, des remontées de contenus de plateformes sociales
                            </p>
                            <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/que-dit-la-loi">En savoir plus</a>
                        </div>
                    </div>

                </div>

                <div className="w-full flex justify-center items-center border-t border-solid border-gray-200">
                    <button onClick={close} type="button" className="border-r border-gray-200 flex-1 px-4 py-3 text-gray-500 hover:text-white hover:bg-red-400 duration-150">
                        Je refuse
                    </button>
                    <button onClick={close} type="button" className="flex-1 px-4 py-3 text-gray-500 hover:text-white hover:bg-green-400 duration-150">
                        J'accepte
                    </button>
                </div>
            </div>

        </div>

    );
}
