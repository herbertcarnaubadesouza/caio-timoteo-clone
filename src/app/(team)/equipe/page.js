import { TeamGallery } from "@/components/team/gallery";

export const metadata = {
  title: "Monomito Filmes - Nossa equipe",
  description: "Muito mais que uma produtora de conteúdo audiovisual",
  author: "Bruno Carvalho Feitosa",
  icons: {
    icon: "/logo_monomito-menor.png",
  },
};

  const TeamPage = () => {
    return (
      <section className="all-content">
        <main className="content-page">
          <TeamGallery />
        </main>
      </section>
    );
  }
  
  export default TeamPage;