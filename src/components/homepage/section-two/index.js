"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/projects";
import styles from "./styles.module.css";
import { LightBox } from "@/components/common/lightbox";

export const SectionProjects = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleOpenLightbox = (projectVideoUrl) => {
    setVideoUrl(projectVideoUrl);
    setIsLightboxOpen(true);
  };

  return (
    <section className={styles.section_two}>
      <div className={styles.section_two_card}>
        {projects.slice(0, 8).map((project) => (
          <button
            key={project.id}
            onClick={() => handleOpenLightbox(project.projectVideoUrl)}
          >
            <Image
              className={styles.section_two_card_image}
              src={project.projectCoverImage}
              width={635}
              height={345}
              alt={project.projectCoverImageAlt}
              title={project.projectCoverImageTitle}
              layout="responsive"
            />
          </button>
        ))}
      </div>
      <div className={styles.section_two_see_more}>
        <Link href="/projetos">
          <button className={styles.section_two_see_more_button}>
            + Veja Mais Projetos
          </button>
        </Link>
      </div>
      <LightBox
        setIsLightboxOpen={setIsLightboxOpen}
        isLightboxOpen={isLightboxOpen}
        videoUrl={videoUrl}
      />
    </section>
  );
};
