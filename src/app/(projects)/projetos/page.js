import { SectionGallery } from "@/components/projectpage/gallery";

export const metadata = {
  title: "Monomito Filmes - Projetos",
  description: "Projetos realizados pela Monomito Filmes.",
  icons: {
    icon: "/logo_monomito-menor.png",
  },
};

const ProjectsPage = () => {
  return (
    <section className="all-content">
      <main className="content-page">
        <SectionGallery />
      </main>
    </section>
  );
}

export default ProjectsPage