import Image from "next/image";
import styles from "./page.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <header className="cabecalho">
        <ul className="listaicones">
          <li className="icones">
            <a href="https://www.facebook.com/monomitofilmes/" target="_blank"> 
            <FaFacebookSquare size="4em" color="white"/> 
            </a>
          </li>
          <li className="icones">
            <a href="https://www.instagram.com/monomitofilmes/" target="_blank">
              <FaInstagram size="4em" color="white" />
            </a>
          </li>
          <li className="icones">
            <a href="https://www.youtube.com/channel/UCFacycfmcN-9HwOue4qE07Q" target="_blank"> 
            <FaYoutube size="4em" color="white"/> 
            </a>
          </li>
        </ul>
      </header>

      <main className={styles.main}>
        <div className={styles.center}>
          <Image className="imagem"
            src="/logo_monomito.svg"
            alt="Monomito Filmes Logo"
            width={500}
            height={500}
            priority
          />
        </div>
      </main>
    </section>
  );
}
