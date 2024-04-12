import { TeamSlider } from "@/components/team/slider";

export const metadata = {
  title: "Monomito Filmes - Nossa equipe",
  description: "Muito mais que uma produtora de conteúdo audiovisual",
  icons: {
    icon: "/logo_monomito-menor.png",
  },
};

  const TeamPage = () => {
    return (
      <section className="all-content">
        <main className="content-page">
          <TeamSlider />
        </main>
      </section>
    );
  }
  
  export default TeamPage;