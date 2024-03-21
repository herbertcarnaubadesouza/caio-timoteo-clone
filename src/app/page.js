import Image from "next/image";
import styles from "./page.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  return (
    <section>
      <header className="cabecalho">
        <div>
          <a href="#"><h1 className="header-title">Monomito Filmes</h1></a>
        </div>

        <div className="openclose">
          <IoMenu size="1.4em" color="white" />
          <IoMdClose size="1.4em" color="white" />
        </div>

        <ul className="headerlist">
          <a href="#"><li className="headeritemlist">Início</li></a>
          <a href="#"><li className="headeritemlist">Projeto</li></a>
          <a href="#"><li className="headeritemlist">Sobre</li></a>
          <a href="#"><li className="headeritemlist">Contatos</li></a>
        </ul> 
        <ul className="listaicones">
          <li className="icones">
            <a href="https://www.facebook.com/monomitofilmes/" target="_blank"> 
            <FaFacebookSquare size="1.4em" color="white"/> 
            </a>
          </li>
          <li className="icones">
            <a href="https://www.instagram.com/monomitofilmes/" target="_blank">
              <FaInstagram size="1.4em" color="white" />
            </a>
          </li>
          <li className="icones">
            <a href="https://www.youtube.com/channel/UCFacycfmcN-9HwOue4qE07Q" target="_blank"> 
            <FaYoutube size="1.4em" color="white"/> 
            </a>
          </li>
        </ul>
      </header>



      <main className={styles.main}>
        <div className={styles.center}>
          <Image className="imagem-monomito"
            style={{ width: '100%', height: '100%', maxHeight: '300px'  }}
            src="/logo_monomito.svg"
            alt="Monomito Filmes Logo"
            width={100}
            height={100}
            priority
          />
        </div>
      </main>
    </section>
  );
}
