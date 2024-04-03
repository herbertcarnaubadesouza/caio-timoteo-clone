import styles from "./styles.module.css"

export const SectionVideo = ({ videoUrl }) => {
    return (
      <section className={styles.embed_video_section}>
        <div className={styles.embed_video}>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            autoPlay="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    )
}