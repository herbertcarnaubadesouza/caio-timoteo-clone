import { SectionOne } from "@/components/homepage/section-one";
import { SectionTwo } from "@/components/homepage/section-two";
import { SectionThree } from "@/components/homepage/section-three";
import { SectionAboutMonomito } from "@/components/common/section-about-monomito";
import { SectionOurServices } from "@/components/common/section-our-services";
import { SectionOurAchievements } from "@/components/common/section-our-achievments";

export const metadata = {
  title: "Monomito Filmes",
  description: "Muito mais que uma produtora de conteúdo audiovisual",
  icons: {
    icon: "/logo_monomito-menor.png",
  },
};

const HomePage = () => {
  return (
    <section className="all-content">
      <main className="content-page">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionAboutMonomito />
        <SectionOurServices />
        <SectionOurAchievements />
      </main>
    </section>
  );
}

export default HomePage