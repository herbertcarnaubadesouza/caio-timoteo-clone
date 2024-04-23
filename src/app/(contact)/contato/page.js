import { ContactContent } from "@/components/contact";

export const metadata = {
  title: "Monomito Filmes - Contato",
  description: "Muito mais que uma produtora de conteúdo audiovisual",
  author: "Bruno Carvalho Feitosa",
  icons: {
    icon: "/logo_monomito-menor.png",
  },
};

const ContactPage = () => {
  return (
    <section className="all-content">
      <main className="content-page">
        <ContactContent />
      </main>
    </section>
  );
}

export default ContactPage;