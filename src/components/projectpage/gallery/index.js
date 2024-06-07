"use client";
import { useState } from "react";
import Image from "next/image";
import { projects } from "@/utils/projects";
import { LightBox } from "@/components/common/lightbox";
import styles from "./styles.module.css";

export const SectionGallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleOpenLightbox = (projectVideoUrl) => {
    setVideoUrl(projectVideoUrl);
    setIsLightboxOpen(true);
  };

  return (
    <section className={styles.section_gallery}>
      <div>
        <h2>Todos os projetos da Monomito Filmes</h2>
      </div>
      <div className={styles.section_gallery_grid}>
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => handleOpenLightbox(project.projectVideoUrl)}
          >
            <Image
              className={styles.section_gallery_grid_image}
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
      <LightBox
        setIsLightboxOpen={setIsLightboxOpen}
        isLightboxOpen={isLightboxOpen}
        videoUrl={videoUrl}
      />
    </section>
  );
};
