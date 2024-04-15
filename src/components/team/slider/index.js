"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import { team } from "@/utils/team";
import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const TeamSlider = () => {
    return (
        <section className={styles.teamSlider}>
            <div className={styles.teamSlider_wrapper}>
                <div className={styles.teamSlider_title}>
                    <h1>
                        Nossa equipe
                    </h1>
                </div>
                <div className={styles.teamSlider_slider}>
                    <Swiper
                        slidesPerView={1}
                        grabCursor={true}
                        navigation={true}
                        loop={true}
                        modules={[Keyboard, Navigation]}
                        centeredSlides={true}
                    >
                        {team.map((people) => (
                            <SwiperSlide key={people.id}>
                                <div className={styles.teamSlider_item}>
                                    <div className={styles.teamSlider_picture}>
                                        <Image
                                            src={people.photo}
                                            width={500}
                                            height={500}
                                            alt={people.name}
                                            title={people.name}
                                        />
                                    </div>
                                    <div className={styles.teamSlider_info}>
                                        <h2>
                                            {people.name}
                                        </h2>
                                        <h3>
                                            {people.function}
                                        </h3>
                                        <p>
                                            {people.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};