import { AboutContent } from "@/components/about/content";

export const metadata = {
  title: "Monomito Filmes - Sobre",
  description: "Muito mais que uma produtora de conteúdo audiovisual",
  author: "Bruno Carvalho Feitosa",
  icons: {
    icon: "/logo_monomito-menor.png",
  },
};

const AboutPage = () => {
  return (
    <section className="all-content">
      <main className="content-page">
        <AboutContent />
      </main>
    </section>
  );
}

export default AboutPage;