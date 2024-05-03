"use client";
import Image from "next/image";
import { team } from "@/utils/team";
import styles from "./styles.module.css";

export const TeamGallery = () => {
    return (
        <section className={styles.teamGallery}>
            <div className={styles.teamGallery_wrapper}>
                <div className={styles.teamGallery_title}>
                    <h1>
                        Nossa equipe
                    </h1>
                </div>
                <div className={styles.teamGallery_slider}>
                    {team.map((people) => (
                        <div key={people.id}>
                            <div className={styles.teamGallery_item}>
                                <div className={styles.teamGallery_picture}>
                                    <Image
                                        src={people.photo}
                                        width={500}
                                        height={500}
                                        alt={people.name}
                                        title={people.name}
                                    />
                                </div>
                                <div className={styles.teamGallery_info}>
                                    <h2>
                                        {people.name}
                                    </h2>
                                    <h3>
                                        {people.function}
                                    </h3>
                                </div>
                                <div className={styles.teamGallery_overlay}>
                                    <div className={styles.teamGallery_overlay_picture}>
                                        <Image
                                            src={people.photo}
                                            width={500}
                                            height={500}
                                            alt={people.name}
                                            title={people.name}
                                        />
                                    </div>
                                    <div className={styles.teamGallery_overlay_description}>
                                        <h2>
                                            {people.name}
                                        </h2>
                                        <p>
                                            {people.descriptionOne}
                                        </p>
                                        <p>
                                            {people.descriptionTwo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};