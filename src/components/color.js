import React, {useEffect, useRef} from 'react';

import pb from "../Pinkb.jpg";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function Color(props) {
    gsap.registerPlugin(ScrollTrigger);
    const textRef = useRef(null);

    useEffect(() => {
        // Create GSAP animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.color',
                start: 'top 60%',
                end: 'top 80%',
                scrub: 1,
                toggleActions: 'play reverse power3.inOut',
            },
        });

        tl.fromTo(
            textRef.current,
            {opacity: 0, x: 200},
            {opacity: 1, x: 0, duration: 1, ease: 'power3.inOut'}
        );
    }, []);




    return (
        <div>
            <div className="image-container">
                <img src={pb} alt="" className="overlay-image"/>
                <img src={pb} alt="" style={{width: '100vw', height: '100vh'}}
                     className={'front-image'}/>

                <div className={'front-text'}>
                    <div>we pli;</div>
                    <div>we share, we play</div>
                </div>
            </div>

            <div className={'color'} style={{width: '100vw', height: '100vh'}}>
                <div className={'color_text'} ref={textRef}>
                    <div>we share</div>
                </div>
                <div className={'color_text2'} ref={textRef}>
                    <div>share what?</div>
                </div>
                <div className={'box_main'}>
                    <div className={'info_box'}></div>

                </div>
            </div>


            <div className={'color2'} style={{width: '100vw', height: '100vh'}}>
                <div className={'color_box2'}>

                </div>
                <div className={'color_text2'}>

                </div>
            </div>

        </div>
    );
}

export default Color;