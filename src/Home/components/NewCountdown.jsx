import React, { useState, useEffect } from 'react';

function Countdown({ date }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(date) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days:    Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours:   Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
                expired: false,
            };
        } else {
            timeLeft = {
                days:    0,
                hours:   0,
                minutes: 0,
                seconds: 0,
                expired: true,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const {
        days, hours, minutes, seconds, expired,
    } = timeLeft;

    if (expired) {
        const twoDaysAfterExpiration = +new Date(date) + 2 * 24 * 60 * 60 * 1000;
        const message = +new Date() > twoDaysAfterExpiration
            ? 'Salon terminé'
            : 'Salon en cours';
        return <div>{message}</div>;
    }

    return (
        <section className="py-20 bg-[url('/dist/images/pattern-dark.jpeg')]">
            <div className="flex justify-center items-center">

                <div className="grid grid-flow-col gap-8 lg:gap-28 text-center auto-cols-max text-4xl lg:text-[150px]">
                    <div
                        className="flex flex-col countdown font-tungstenb_semibold tracking-[0.566667px] leading-[.95] indent-0 uppercase"
                    >
                        <span className="">
                            {days}
                        </span>
                        jours
                    </div>
                    <div
                        className="flex flex-col countdown font-tungstenb_semibold tracking-[0.566667px] leading-[.95] indent-0 uppercase"
                    >
                        <span className="">
                            {hours}
                        </span>
                        heures
                    </div>
                    <div
                        className="flex flex-col countdown font-tungstenb_semibold tracking-[0.566667px] leading-[.95] indent-0 uppercase"
                    >
                        <span className="">
                            {minutes}
                        </span>
                        min
                    </div>
                    <div
                        className="flex flex-col countdown font-tungstenb_semibold tracking-[0.566667px] leading-[.95] indent-0 uppercase"
                    >
                        <span className="">
                            {seconds}
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Countdown;
