/* eslint-disable no-console */
import React from 'react';
import CategoryImage from '../components/CategoryImage';
import { useSettings } from '../context/ConfigurationContext';
import Tickets from '../Home/components/Tickets';
import { BILLETTERIE_CATEGORY } from '../utils/config';
import useScript from '../utils/useScript';

export default function Billetterie() {
    const { config } = useSettings();
    useScript(`https://www.billetweb.fr/js/export.js?nnn=${Date.now()}`);

    if (!config || Object.entries(config).length === 0) return null;

    return (

        <>
            <CategoryImage categoryId={BILLETTERIE_CATEGORY} categoryName="Billetterie" />

            {/* <section className="relative h-[calc(100vh-100px)] overflow-hidden">
                    <div className="absolute bottom-0 left-0 m-auto right-0 top-0">
                        <div className="w-full h-full relative overflow-hidden">
                            <img src="http://localhost:8001/_nuxt/image/1f2ba1.webp" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="relative z-10 pb-[69px] max-w-[1200px] w-[calc(100%-30px)] mx-auto h-full justify-end flex-col flex">
                        <h1 className="font-microgramma text-white text-[40px] lg:text-[96px] tracking-[0.566667px] leading-[.95] uppercase">Billeterie</h1>
                    </div>
                </section> */}
            <div className="overflow-hidden bg-[#F3F3F3] bg-repeat">
                <section className="pb-36">
                    <Tickets />
                    <div className="max-w-[1200px] m-auto">
                        <h1 className="mb-2 text-center font-heading_bold text-[40px] lg:text-[38px] tracking-[0.566667px] leading-[.95] uppercase text-black">{config.event_date}</h1>
                        <ul className="grid">
                            <div
                                className="text-white mt-20 w-full h-full"
                                id="div_id"
                            >
                                {/* <iframe
                                        frameBorder="0"
                                        allow="fullscreen"
                                        width="100%"
                                        height="100%"
                                        src="https://www.billetweb.fr/shop.php?event=tgs-toulouse-2022"
                                    /> */}
                                <a
                                    title="Vente de billets en ligne"
                                    href={`https://www.billetweb.fr/shop.php?event=${config.ticket_link}`}
                                    className="shop_frame"
                                    target="_blank"
                                    data-src={`https://www.billetweb.fr/shop.php?event=${config.ticket_link}`}
                                    data-max-width="100%"
                                    data-initial-height="600"
                                    data-scrolling="no"
                                    data-id={config.ticket_link}
                                    data-resize="1"
                                    rel="noreferrer"
                                >
                                    Vente de billets en ligne
                                </a>
                            </div>

                        </ul>
                    </div>
                </section>
            </div>
            {/* <BeforeFooter /> */}
        </>

    );
}
