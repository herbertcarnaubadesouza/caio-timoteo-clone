import { SectionOne } from "@/components/homepage/section-one";
import { SectionTwo } from "@/components/homepage/section-two";
import { SectionThree } from "@/components/homepage/section-three";

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
      </main>
    </section>
  );
}

export default HomePage