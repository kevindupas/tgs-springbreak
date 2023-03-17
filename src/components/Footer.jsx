/* eslint-disable jsx-a11y/label-has-associated-control */
import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../context/ConfigurationContext';
// import { URL } from '../utils/config';

function Footer() {
    const { config } = useSettings();
    return (
        <footer className="bg-black">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <Link to="presse" className="text-base text-white font-semibold"> Presse </Link>
                    </div>

                    <div className="px-5 py-2">
                        <a href="mailto:staff@tgsevenements.com" className="text-base text-white font-semibold"> Devenir staff </a>
                    </div>

                    <div className="px-5 py-2">
                        <a href="mailto:contact@tgsevenements.com" className="text-base text-white font-semibold"> Devenir partenaire </a>
                    </div>

                    <div className="px-5 py-2">
                        <a href="mailto:commercial@tgsevenements.com" className="text-base text-white font-semibold"> Devenir exposant </a>
                    </div>

                    <div className="px-5 py-2">
                        <Link to="mention_legale" className="text-base text-white font-semibold"> Mentions légales </Link>
                    </div>

                    <div className="px-5 py-2">
                        <Link to="cgu" className="text-base text-white font-semibold"> Conditions générales </Link>
                    </div>

                    <div className="px-5 py-2">
                        <a href="mailto:contact@tgsevenements.com" className="text-base text-white font-semibold"> Contactez-nous </a>
                    </div>
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    <a href={config.facebook_link} target="_blank" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                        <div className="flex items-center w-9 h-auto">
                            <img src="../dist/icons/facebook.svg" alt="" />
                        </div>
                    </a>

                    <a href={config.twitter_link} target="_blank" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                        <div className="flex items-center w-9 h-auto">
                            <img src="../dist/icons/twitter.svg" alt="" />
                        </div>
                    </a>

                    <a href={config.instagram_link} target="_blank" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                        <div className="flex items-center w-9 h-auto">
                            <img src="../dist/icons/instagram.svg" alt="" />
                        </div>
                    </a>

                    <a href={config.tiktok_link} target="_blank" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                        <div className="flex items-center w-8 h-auto">
                            <img src="../dist/icons/tiktok.svg" alt="" />
                        </div>
                    </a>

                    <a href={config.youtube_link} target="_blank" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                        <div className="flex items-center w-12 h-auto">
                            <img src="../dist/icons/youtube.svg" alt="" />
                        </div>
                    </a>

                    <a href="https://www.twitch.tv/tgsevenements" target="_blank" className="text-gray-400 hover:text-gray-500" rel="noreferrer">
                        <div className="flex items-center w-8 h-auto">
                            <img src="../dist/icons/twitch.png" alt="" />
                        </div>
                    </a>

                </div>
                <p className="mt-8 text-center text-base text-gray-400">
                    &copy;
                    {' '}
                    {dayjs().year()}
                    {' '}
                    <a href="http://tgsevenements.com/" target="_blank" rel="noreferrer" className="text-[#1eabe8]">TGS EVENEMENTS</a>
                    {' '}
                    - Tous droits réservés.
                    <br />
                    Design et Développement par
                    {' '}
                    <a href="https://kevindupas.com" target="_blank" rel="noreferrer" className="text-[#1eabe8]">Kévin Dupas</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
