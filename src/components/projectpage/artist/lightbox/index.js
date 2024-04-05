"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { IoClose } from "react-icons/io5";
import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const LightBox = ({ setIsLightboxOpen, pictures }) => {
    return (
        <div className={styles.lightbox}>
            <div className={styles.lightbox_close}>
                <button onClick={() => setIsLightboxOpen(false)}>
                    <IoClose />
                </button>
            </div>
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
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                {pictures.map((picture, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={picture}
                            width={500}
                            height={500}
                            alt="Foto"
                            onClick={() => setIsLightboxOpen(true)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}