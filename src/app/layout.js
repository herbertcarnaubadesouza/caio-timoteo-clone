import { Roboto } from "next/font/google";
import { Header } from "@/components/common/header";
import { HeaderMobile } from "@/components/common/header-mobile";
import { ContactForm } from "@/components/common/contact-form";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { ScrollTop } from "@/components/common/scroll-top";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css"

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata = {
  title: "Monomito Filmes - Projetos",
  description: "Projetos realizados pela Monomito Filmes.",
  author: "Bruno Carvalho Feitosa",
  icons: {
    icon: "/logo_monomito-menor.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Header />
        <HeaderMobile />
        {children}
        <ContactForm />
        <WhatsAppButton />
        <ScrollTop />
      </body>
    </html>
  );
}
