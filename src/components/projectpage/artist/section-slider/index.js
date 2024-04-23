"use client"
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, EffectCoverflow } from "swiper/modules";
import { LightBox } from "@/components/projectpage/artist/lightbox";
import styles from "./page.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SectionSlider = ({ pictures }) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    return (
        <section className={styles.slider_section}>
            <Swiper
                slidesPerView={1}
                grabCursor={true}
                navigation={true}
                loop={true}
                modules={[Keyboard, Navigation, EffectCoverflow]}
                effect={'coverflow'}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    768: {
                      slidesPerView: 2
                    },
                    1024: {
                      slidesPerView: 4
                    },
                }}
            >
                {pictures.map((picture, index) => (
                    <SwiperSlide key={index}>
                        <>
                            <Image
                                src={picture}
                                width={500}
                                height={500}
                                alt="Foto"
                                onClick={() => setIsLightboxOpen(true)}
                            />
                            
                        </>
                    </SwiperSlide>
                ))}
            </Swiper>
            {isLightboxOpen && (
                <LightBox
                    setIsLightboxOpen={setIsLightboxOpen}
                    pictures={pictures}
                />
            )}
        </section>
    )
}