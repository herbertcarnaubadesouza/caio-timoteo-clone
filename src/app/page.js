import Image from "next/image";
import styles from "./page.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
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
    <section className="all-content">
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
          <li className="icones">
            <a href="https://br.linkedin.com/company/monomito-filmes" target="_blank"> 
            <AiFillLinkedin size="1.4em" color="white"/> 
            </a>
          </li>
        </ul>
      </header>

      <main className="content-home">
        {/* Seção 1 */}
        <div className="section-one">
          <section className="section-one--box-text">
            <h1 className="section-one-title">Monomito <br></br> Filmes</h1>
            <p className="section-one-text">Muito mais que uma produtora <br></br> de conteúdo audiovisual</p>
          </section>
          <section className="logo_monomito_section_um">
            <Image className="logo_monomito_um"
              src="/logo_monomito.png"
              width={150}
              height={150}
              alt="logo monomito"
            />
          </section>
        </div>
        {/* Seção 2 */}
        <div className="section-two">
            <Image className="imagem-section-two"
              src="/monomito_imagem_grid_1.jpg"
              width={635}
              height={345}
              alt="Evidentemente - Jotad3 feat. Poeta Márcio Ricardo"
              layout="responsive"
            />           
            <Image className="imagem-section-two"
              src="/monomito_imagem_grid_2.jpg"
              width={635}
              height={345}
              alt="Lucas Koka Penteado | Tarja Preta | prod MONOMITO"
              layout="responsive"
            />  
            <Image className="imagem-section-two"
              src="/monomito_imagem_grid_3.jpg"
              width={633}
              height={345}
              alt="Khalil Magno - Ana Laura e Roni | Canto Monomito 1#"
              layout="responsive"
            /> 
            <Image className="imagem-section-two"
              src="/monomito_imagem_grid_4.jpg"
              width={633}
              height={345}
              alt="Mila Rapper | Tarja Preta | prod MONOMITO"
              layout="responsive"
            /> 
            <Image className="imagem-section-two"
              src="/monomito_imagem_grid_5.jpg"
              width={633}
              height={345}
              alt="NÃO É SÓ ISSO - MENTE MATÉRIA feat KIM - prod Rodrigo Cunha | prod MONOMITO FILMES"
              layout="responsive"
            />
            <Image className="imagem-section-two"
              src="/monomito_imagem_grid_6.jpg"
              width={633}
              height={345}
              alt="Carolina - CarraraFlow (prod Rodrigo Cunha)"
              layout="responsive"
            />      
            <Image className="imagem-section-two"
              src="/monomito_imagem_grid_7.jpg"
              width={633}
              height={345}
              alt="BIA FERREIRA | PUT YOUR RECORDS ON | prod MONOMITO"
              layout="responsive"
            />      
            <Image className="imagem-section-two"
              src="/monomito_imagem_grid_8.jpg"
              width={633}
              height={345}
              alt="Renato Pessoa - Voo | Canto Monomito 4#"
              layout="responsive"
            />      
            <Image className="imagem-section-two"
              src="/monomito_imagem_grid_9.jpg"
              width={633}
              height={345}
              alt="Rolê no ACK12 - Arte e Cultura na Kebrada | prod MONOMITO"
              layout="responsive"
            />      
        </div>
        {/* Botão da seção 2 */}
        <div className="button-division">
            <button className="button-section-two">Veja Mais Projetos</button>
        </div>
        
        {/* Seção 3 Video Embed */}
        <div className="embed-video">
          <iframe src="https://www.youtube.com/embed/ePSf1K_RkN8?vq=hd1080p&rel=0&iv_load_policy=3&hl=pt-br"
          title="Recayd Mob - Plaqtudum (Ao Vivo Show) | prod MONOMITO" 
          frameborder="0" allowfullscreen>
          </iframe>
        </div>
        
      </main>
    </section>
  );
}
