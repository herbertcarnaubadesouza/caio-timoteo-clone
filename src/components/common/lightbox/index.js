"use client";
import { IoClose } from "react-icons/io5";
import styles from "./styles.module.css";

export const LightBox = ({ setIsLightboxOpen, isLightboxOpen, videoUrl }) => {
  console.log("videoUrl", videoUrl);

  return (
    <div>
      {isLightboxOpen && (
        <div className={styles.lightbox}>
          <div className={styles.lightbox_close}>
            <button onClick={() => setIsLightboxOpen(false)}>
              <IoClose />
            </button>
          </div>
          <div className={styles.lightbox_video}>
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};
