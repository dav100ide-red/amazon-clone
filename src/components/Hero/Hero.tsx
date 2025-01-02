"use client"; // not SSR because carousel needs window width, which is client-side
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

import sliderImg_1 from "@/assets/images/slider/sliderImg_1.jpg";
import sliderImg_2 from "@/assets/images/slider/sliderImg_2.jpg";
import sliderImg_3 from "@/assets/images/slider/sliderImg_3.jpg";
import sliderImg_4 from "@/assets/images/slider/sliderImg_4.jpg";
import Image from "next/image";
import style from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={style.heroContainer}>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showArrows={true}
                showThumbs={false}
                interval={3000}
                className={style.carousel}>
                <Image priority src={sliderImg_1} alt="sliderImg" />

                <Image src={sliderImg_2} alt="sliderImg" />

                <Image src={sliderImg_3} alt="sliderImg" />

                <Image src={sliderImg_4} alt="sliderImg" />
            </Carousel>
            <div className={style.heroGradient}></div>
        </div>
    );
};

export default Hero;
