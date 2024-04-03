"use client"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/utils/projects"
import styles from "./styles.module.css"

export const SectionGallery = () => {
    return (
        <section className={styles.section_gallery}>
            <div>
                <h2>
                    Todos os projetos da Monomito&apos;s
                </h2>
            </div>
            <div className={styles.section_gallery_grid}>
                {projects.map((project) => (
                    <Link key={project.id} href={`/projetos/${encodeURIComponent(project.searchableKey.slice(1))}`}>
                        <Image
                            className={styles.section_gallery_grid_image}
                            src={project.artistCoverImage}
                            width={635}
                            height={345}
                            alt={project.artistCoverImageAlt}
                            title={project.artistCoverImageTitle}
                            layout="responsive"
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}
