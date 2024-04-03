"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import styles from "./page.module.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SectionSlider = ({ pictures }) => {
    return (
        <section className={styles.slider_section}>
            <Swiper
                slidesPerView={1}
                grabCursor={true}
                pagination={{ type: 'fraction' }}
                navigation={true}
                loop={true}
                modules={[Keyboard, Pagination, Navigation, EffectCoverflow]}
                effect={'coverflow'}
                centeredSlides={true}
                coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 20,
                modifier: 1,
                slideShadows: true,
                }}
                breakpoints={{
                    1024: {
                      slidesPerView: 3
                    },
                  }}
            >
                {pictures.map((picture, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={picture}
                            width={500}
                            height={500}
                            alt="Fotos"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}