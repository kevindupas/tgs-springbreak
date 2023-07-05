/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import React from 'react';
import ReactElasticCarousel from '@itseasy21/react-elastic-carousel';
// import { LeftArrow, RightArrow } from '../utils/config';

// consts.PREV = undefined;

// function myArrow({
//     type,
//     onClick,
//     isEdge,
// }) {
//     const pointer = type === consts.PREV ? <img width={50} src={LeftArrow} alt="" />
//         : <img width={50} src={RightArrow} />;
//     return (
//         <button type="button" onClick={onClick} disabled={isEdge}>
//             {pointer}
//         </button>
//     );
// }

const breakPoints = [
    {
        width:       1,
        itemsToShow: 1,
    },
    {
        width:       550,
        itemsToShow: 2,
    },
    {
        width:       768,
        itemsToShow: 3,
    },
    {
        width:       1200,
        itemsToShow: 6,
    },
];

function Carousel({
    children,
    wheel,
    wheelScroll,
}) {
    return (
        <ReactElasticCarousel
        // renderArrow={myArrow}
            breakPoints={breakPoints}
            showArrows
            enableSwipe
            enableMouseSwipe={false}
            preventDefaultTouchmoveEvent={false}
            wheel={wheel}
            wheelScroll={wheelScroll}
            pagination={false}
            isRTL={false}
        >
            {children}
        </ReactElasticCarousel>
    );
}

export default Carousel;
