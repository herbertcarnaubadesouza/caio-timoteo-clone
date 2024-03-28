import Image from "next/image";
import styles from "./page.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


export const metadata = {
  title: 'Monomito Filmes',
  description: 'Muito mais que uma produtora de conteúdo audiovisual',
  icons: {
    icon: '/logo_monomito-menor.png', // /public path
  },
}

export default function Home() {
  return (
    <section>
      <header className="cabecalho">
        <div className="itemsb">
          <div>
            <a href="#"><h1 className="header-title">MONOMITO FILMES</h1></a>
          </div>

          <div className="openclose">
            <IoMenu size="1.4em" color="white" />
            <IoMdClose size="1.4em" color="white" />
          </div>
        </div>

        <ul className="headerlist">
          <a className="item_link" href="#"><li className="headeritemlist">Inicio</li></a>
          <a className="item_link" href="#"><li className="headeritemlist">Projetos</li></a>
          <a className="item_link" href="#"><li className="headeritemlist">Sobre</li></a>
          <a className="item_link" href="#"><li className="headeritemlist">Equipe</li></a>
          <a className="item_link" href="#"><li className="headeritemlist">Contatos</li></a>
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

      <main>

        <div className="section-one">
          <h1 className="section-one-title">Monomito <br></br> Filmes</h1>
          <p className="section-one-text">Muito mais que uma produtora <br></br> de conteúdo audiovisual</p>
        </div>  

      </main>
    </section>
  );
}
