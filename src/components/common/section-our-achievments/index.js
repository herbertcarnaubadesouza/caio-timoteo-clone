"use client"
import CountUp from "react-countup"
import { HiOutlineTrophy } from "react-icons/hi2";
import styles from "./page.module.css";
import Link from "next/link";

export const SectionOurAchievements = () => {
  return (
    <section className={styles.our_achievements}>
      <div className={styles.our_achievements_wrapper}>
        <div className={styles.our_achievements_title}>
          <h1>
            Nossa
          </h1>
          <h1>
            Jornada
          </h1>
          <p>
            Com 4 anos de jornada em produção audiovisual, contamos com uma 
            equipe treinada e especializada, equipamentos compatíveis com o 
            mercado e métodos de produção eficientes. Estamos mais do que
            preparados em atender suas expectativas, ao longos deste 4 anos
            tivemos muitos feitos e experiências que foram reconhecidas
            através de diversas indicações à prêmios e eventos de muita importância
            para o mercado audiovisual.
          </p>
          <Link href="/sobre">
            Saiba mais
          </Link>
        </div>
        <div className={styles.our_achievements_allinfos}>
          <div className={styles.our_achievements_allinfos_container}>
            <div className={styles.our_achievements_allinfos_container_achievements}>
              <h1>
                <HiOutlineTrophy />
                <span>-</span>
                <CountUp
                  start="2000"
                  end="2022"
                  duration={3}
                  enableScrollSpy
                  separator=""
                />
              </h1>
              <ul>
                <li>
                  <p>
                    Ganhamos menção honrosa na 8.a Edição do festival Francês 
                    MegaCities ShortDocs de curtas metragens com o curta Amazônia 
                    passa aqui de direção da Aline Cavalcanti Mendonça.
                  </p>
                </li>
                <li>
                  <p>
                    Amplifica Cine: Participamos da aceleração de negócios de 
                    audiovisual pela ADESAMPA e SPCINE.
                  </p>
                </li>
                <li>
                  <p>
                    Ventana Sur Buenos Aires: Participamos do maior festival de 
                    cinema da América Latina na Argentina.
                  </p>
                </li>
                <li>
                  <p>
                    Prêmio LED Rede Globo: Indicados no Prêmio LED Luz na 
                    Educação com o projeto educacional Tarja Preta.
                  </p>
                </li>
                <li>
                  <p>
                    Expo Favela: Selecionados e participamos do maior 
                    evento de inovação das favelas, com realização da CUFA.
                  </p>
                </li>
                <li>
                  <p>
                    Pixel Show: Convidados a participar da Pixel, reconhecido
                    festival internacional de criatividade.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.our_achievements_allinfos_container}>
            <div className={styles.our_achievements_allinfos_container_achievements}>
              <h1>
                <HiOutlineTrophy />
                <span>-</span>
                <CountUp
                  start="2000"
                  end="2023"
                  duration={3}
                  enableScrollSpy
                  separator=""
                />
              </h1>
              <ul>
                <li>
                  <p>
                    SXSW 23: Participação no maior evento de 
                    inovação e criatividade do mundo em Austin, 
                    Texas (ADESAMPA / SPCine).
                  </p>
                </li> 
                <li>
                  <p>
                    Sebrae for Startups Ginga Afro Tech Hub: Aceleração 
                    pela rede de mentores do Sebrae, focada em empresas 
                    lideradas por pessoas negras.
                  </p>
                </li> 
                <li>
                  <p>
                    Web Summit Lisboa: Participação no Web Summit, principal 
                    evento de inovação para negócios em fase de internacionalização (ADESAMPA).
                  </p>
                </li> 
                <li>
                  <p>
                    Expo Favela: Selecionados novamente para expor e participar 
                    de um meet sobre mercado de economia criativa.
                  </p>
                </li> 
              </ul>
            </div>
          </div>
          <div className={styles.our_achievements_allinfos_container}>
            <div className={styles.our_achievements_allinfos_container_achievements}>
              <h1>
                <HiOutlineTrophy />
                <span>-</span>
                <CountUp
                  start="2000"
                  end="2024"
                  duration={3}
                  enableScrollSpy
                  separator=""
                />
              </h1>
              <ul>
                <li>
                  <p>
                    SXSW 24: Convidados pela ADESAMPA para participar do painel 
                    da CasaSP sobre economia criativa, no maior evento de inovação 
                    e criatividade do mundo.
                  </p>
                </li> 
                <li>
                  <p>
                    GrowthXP Sebrae for Startups: Sendo acelerados pelo time de 
                    startups do Sebrae, com acesso à rede de mentores especializados 
                    em negócios de impacto.
                  </p>
                </li> 
                <li>
                  <p>
                    Tarja Preta 4º edição: Produção de 20 mini documentários 
                    de poetas e artistas periféricos, culminando na mostra 
                    Tarja Preta e no lançamento do livro do projeto.
                  </p>
                </li> 
                <li>
                  <p>
                    Lab Monomito: Criação do Lab Monomito, hub de criatividade 
                    audiovisual na zona leste de São Paulo, promovendo acesso ao 
                    audiovisual para jovens e pequenos empreendedores de territórios de periferia e favela.
                  </p>
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
