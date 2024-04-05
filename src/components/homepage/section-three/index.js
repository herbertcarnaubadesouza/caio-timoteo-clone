"use client"
import styles from "./styles.module.css";

export const SectionThree = () => {
    return (
      <section className={styles.section_three}>
        <div className={styles.embed_video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ePSf1K_RkN8?autoplay=1&mute=1&disablekb=1&controls=0"
            title="YouTube video player"
            style={{ border: 0 }}
            autoPlay
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    );
};