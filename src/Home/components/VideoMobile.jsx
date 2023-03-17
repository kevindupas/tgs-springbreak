/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSettings } from '../../context/ConfigurationContext';

export default function Video() {
    const { config } = useSettings();

    return (
        <section className="relative h-[calc(100vh-80px)]">
            <div className="relative z-10 max-w-[1200px] mx-auto h-full content-end flex items-center flex-row-reverse">
                <blockquote className="text-white font-heading_bold tracking-[0.566667px] leading-[.95] indent-0 uppercase text-4xl w-[19.4rem] border-l-[15px] border-[#1eabe8] pl-5 py-4 relative">
                    <span
                        className="drop-shadow-2xl"
                        style={{
                            transform:  'translate(0px, 0px)',
                            opacity:    '1',
                            visibility: 'inherit',
                        }}
                    >
                        {config.event_date}
                    </span>
                </blockquote>

                <div className="absolute w-20 left-5 bottom-[-53px] z-10">
                    <img
                        style={{
                            transform:  'translate(0px, 0px)',
                            opacity:    '1',
                            visibility: 'inherit',
                        }}
                        src="/dist/images/icons-test.png"
                        alt=""
                    />
                </div>
            </div>
            <div
                className="absolute bottom-0 left-0 mx-auto top-0 md:right-[calc(50%-300px)] lg:right-[calc(50%-516px)]"
            >
                <div
                    className="relative h-full w-full blur-[4px]"
                    dangerouslySetInnerHTML={{
                        __html: `<video
                                loop
                                muted
                                autoplay
                                playsinline
                                type="video/mp4"
                                src='/dist/video/new_video_montpellier.mp4'
                                class='object-cover h-full w-full pt-[5em]'
                            />`,
                    }}
                />
            </div>
        </section>
    );
}
