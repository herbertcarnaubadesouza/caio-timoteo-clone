"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/projects";
import styles from "./styles.module.css";

export const SectionProjects = () => {
    return (
        <section className={styles.section_two}>
            <div className={styles.section_two_card}>
                {projects.map((project) => (
                    <Link key={project.id} href={`/projetos/${encodeURIComponent(project.searchableKey.slice(1))}`}>
                        <Image
                            className={styles.section_two_card_image}
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
            <div className={styles.section_two_see_more}>
                <button className={styles.section_two_see_more_button}>
                    <Link href="/projetos">
                        + Veja Mais Projetos
                    </Link>
                </button>
            </div>
        </section>
    )
}