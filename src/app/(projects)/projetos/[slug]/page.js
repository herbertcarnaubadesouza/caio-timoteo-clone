"use client"
import Head from "next/head"
import { useParams } from 'next/navigation';
import { projects } from '@/utils/projects';
import { metadata } from './metadata';
import { SectionVideo } from "@/components/projectpage/artist/section-video";
import { DataSheet } from "@/components/projectpage/artist/data-sheet";
import { SectionSlider } from "@/components/projectpage/artist/section-slider";

const ProjectPage = () => {
  const params = useParams()
  const project = params.slug? projects.find(project => project.searchableKey === `/${params.slug}`) : null;

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <section className="all-content">
      <Head>
        <title>{`${project.artistName} - ${metadata.title}`}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main className="content-page">
        <SectionVideo videoUrl={project.artistVideoUrl} />
        <DataSheet artist={project} />
        <SectionSlider pictures={project.artistPictures} />
      </main>
    </section>
  );
}

export default ProjectPage;
