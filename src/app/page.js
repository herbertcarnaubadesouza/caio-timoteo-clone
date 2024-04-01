import Image from "next/image";
import styles from "./page.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { GrTrophy } from "react-icons/gr";


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
            <button className="button-section-two"> + Veja Mais Projetos</button>
        </div>
        
        {/* Seção 3 Video Embed */}
        <div className="embed-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ePSf1K_RkN8?autoplay=1&mute=1&disablekb=1&controls=0" title="YouTube video player"
         frameborder="0" autoplay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
        {/* Seção 4 "Sobre a Monomito Filmes" */}
        <div className="sobre-monomito">
          <div className="texts-sobre">
            <h1>Sobre a Monomito Filmes</h1>

            <p>A Monomito Filmes é uma produtora audiovisual com foco em impacto social.</p>

            <p>Produzimos filmes publicitários, institucionais, vídeos de treinamento, comunicação interna, cobertura de eventos e outros produtos para comunicação audiovisual do seu negócio.</p>

            <p>Cada produção é cuidadosamente elaborada, refletindo nossa essência, oferecendo não apenas informações, mas criando conexão real do que você quer falar para seu público.</p>

            <p><strong>Compromisso Social:</strong></p>

            <p>A missão da Monomito Filmes é utilizar a produção audiovisual como uma ferramenta para criar impacto social positivo. A empresa busca conectar histórias e democratizar o acesso à produção audiovisual profissional para grupos sub-representados, como artistas, músicos, coletivos culturais e empreendedores nas periferias.</p>
          </div>
          

        </div>

        {/* Seção 5 "Premios" */}
        <section className="nossas-conquistas">

          <div className="infos">
            <h1 className="titulo-nossas-conquistas">Nossas Conquistas</h1>
            
            <div className="container-allinfos">
              <div className="allinfos">
                  <div className="container-infos">
                    <GrTrophy className="trofeu" size="2rem"/>
                    <div className="conquistas">
                      <h1>Fundação - 2017</h1>
                      <p>Já iniciamos as atividades produzindo um dos momentos mais importantes pra gente e para nosso público fazendo o Monomito Road trip - Batalha do tank vs SP onde levamos 50 jovens de diversas periferias de sp para participar da maior batalha de RAP do brasil no RJ em são gonçalo.</p>
                    </div>
                  </div>
                  <div className="container-infos">
                    <GrTrophy className="trofeu" size="2rem"/>
                    <div className="conquistas">
                      <h1>- 2018</h1>
                      <p>Projeto Tarja Preta: Alcançamos 100 poetas com o Projeto Tarja Preta</p>
                    </div>
                  </div>
                  <div className="container-infos">
                    <GrTrophy className="trofeu" size="2rem"/>
                    <div className="conquistas">
                      <h1>- 2019</h1>
                      <p>Tarja Preta 2º edição: O Coletivo Monomito realiza a segunda edição do Tarja Preta com mais de 64 poetas de diversas periferias de São Paulo participando.</p>
                    </div>
                  </div>
                  <div className="container-infos">
                    <GrTrophy className="trofeu" size="2rem"/>
                    <div className="conquistas">
                      <h1>- 2020</h1>
                      <p>ANIP Aceleração: Entre 34 negócios fomos negócio destaque na aceleração de empresas de periféricas da ANIP realizada pela: ABanca, Artemisia e FGV.</p>
                    </div>
                  </div>
                  <div className="container-infos">
                    <GrTrophy className="trofeu" size="2rem"/>
                    <div className="conquistas">
                      <h1>- 2021</h1>
                      <p>Tarja Preta 3º edição: O Coletivo Monomito realiza a terceira edição do Projeto Tarja Preta onde aumentamos a aposta e o desafio de ampliar o acesso durante a pandemia e registramos e geramos renda para 32 poetas.</p>
                    </div>
                  </div>
                  <div className="container-infos">
                    <GrTrophy className="trofeu" size="2rem"/>
                    <div className="conquistas">
                      <h1>- 2022</h1>
                      <p>Pixel Show: Onde fomos convidados a participar da Pixel reconhecido festival internacional de criatividade como expositores.
                      </p>
                    </div>
                  </div>
              </div>
              
              {/* Segundo bloco das informações */}

              <div className="allinfos-dois">
                <div className="container-infos">
                    <GrTrophy className="trofeu" size="2rem"/>
                      <div className="conquistas">
                        <h1>- 2022</h1>
                        <p>Prêmio LED Rede Globo: fomos indicados no Prêmio LED Luz na educação com o projeto educacional Tarja Preta.</p>
                      </div>
                    </div>
                    <div className="container-infos">
                      <GrTrophy className="trofeu" size="2rem"/>
                      <div className="conquistas">
                        <h1>- 2022</h1>
                        <p>46º Mostra Internacional de Cinema de São Paulo: Como expositores em parceria com a SPCine, Instituto Criar e Adesampa.
                        </p>
                      </div>
                    </div>
                    <div className="container-infos">
                      <GrTrophy className="trofeu" size="2rem"/>
                      <div className="conquistas">
                        <h1>- 2023</h1>
                        <p>Expo Favela: Fomos selecionados mais uma vez para expor e fazer uma participação no meet sobre mercado de economia criativa.
                        </p>
                      </div>
                    </div>
                    <div className="container-infos">
                      <GrTrophy className="trofeu" size="2rem"/>
                      <div className="conquistas">
                        <h1>- 2024</h1>
                        <p>SXSW24: Fomos convidados pela ADESampa para participar do painel da CasaSP sobre economia criativa.</p>
                      </div>
                    </div>
                    <div className="container-infos">
                      <GrTrophy className="trofeu" size="2rem"/>
                      <div className="conquistas">
                        <h1>- 2024</h1>
                        <p>Tarja Preta 4º edição: Nesta edição estamos preparando a produção de 20 mini documentários de poetas e artistas periféricos da cidade, culminando na mostra Tarja Preta e no lançamento do livro do projeto.</p>
                      </div>
                    </div>
                    <div className="container-infos">
                      <GrTrophy className="trofeu" size="2rem"/>
                      <div className="conquistas">
                        <h1>- 2024</h1>
                        <p>Lab Monomito: Criação do Lab Monomito hub de criatividade audiovisual na zona leste de SP onde promovemos acesso ao audiovisual para jovens e pequenos empreendedores de territórios de periferia e favela.</p>
                      </div>
                    </div>
              </div>
            </div>
            
          </div>

        </section>


      </main>
    </section>
  );
}
