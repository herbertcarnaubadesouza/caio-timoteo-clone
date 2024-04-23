import { SectionBanner } from "@/components/homepage/section-banner";
import { SectionProjects } from "@/components/homepage/section-two";
import { SectionAboutMonomito } from "@/components/common/section-about-monomito";
import { SectionBrands } from "@/components/homepage/section-brands";
import { SectionOurServices } from "@/components/common/section-our-services";

export const metadata = {
  title: "Monomito Filmes",
  description: "Muito mais que uma produtora de conteúdo audiovisual",
  author: "Bruno Carvalho Feitosa",
  icons: {
    icon: "/logo_monomito-menor.png",
  },
};

const HomePage = () => {
  return (
    <section className="all-content">
      <main className="content-page">
        <SectionBanner />
        <SectionProjects />
        <SectionAboutMonomito />
        <SectionBrands />
        <SectionOurServices />
      </main>
    </section>
  );
}

export default HomePage