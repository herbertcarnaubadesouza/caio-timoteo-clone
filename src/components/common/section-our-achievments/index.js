import { HiOutlineTrophy } from "react-icons/hi2";
import styles from "./page.module.css"

export const SectionOurAchievements = () => {
  return (
    <section className={styles.our_achievements}>
      <div className={styles.our_achievements_wrapper}>
        <h1 className={styles.our_achievements_title}>
          <u>Nossas Conquistas</u>
        </h1>
        <div className={styles.our_achievements_allinfos}>
          <div>
            <div className={styles.our_achievements_allinfos_container}>
              <div className={styles.our_achievements_allinfos_container_achievements}>
                <h1>
                  <HiOutlineTrophy /> - 2017
                </h1>
                <p>
                  <strong>Batalha do tank vs SP: </strong>
                  onde levamos 50 jovens
                  de diversas periferias de sp para participar da maior batalha
                  de RAP do brasil no RJ em são gonçalo.
                </p>
              </div>
            </div>
            <div className={styles.our_achievements_allinfos_container}>
              <div className={styles.our_achievements_allinfos_container_achievements}>
                <h1>
                  <HiOutlineTrophy /> - 2018
                </h1>
                <p>
                  <strong>Coletivo Monomito: </strong>
                  Instituímos a criação do
                  Coletivo Monomito afim de fomentar a arte e a cultura de
                  artistas independentes. Projeto Tarja Preta: Alcançamos 100
                  poetas com o Projeto Tarja Preta
                </p>
              </div>
            </div>
            <div className={styles.our_achievements_allinfos_container}>
              <div className={styles.our_achievements_allinfos_container_achievements}>
                <h1>
                  <HiOutlineTrophy /> - 2019
                </h1>
                <p>
                  <strong>Tarja Preta 2º edição: </strong>
                  O Coletivo Monomito realiza a segunda
                  edição do Tarja Preta com mais de 64 poetas de diversas
                  periferias de São Paulo participando.
                </p>
              </div>
            </div>
            <div className={styles.our_achievements_allinfos_container}>
              <div className={styles.our_achievements_allinfos_container_achievements}>
                <h1>
                  <HiOutlineTrophy /> - 2020
                </h1>
                <p>
                  <strong>ANIP Aceleração:</strong>
                  Entre 34 negócios fomos negócio destaque na
                  aceleração de empresas de periféricas da ANIP realizada pela:
                  ABanca, Artemisia e FGV.
                </p>
              </div>
            </div>
            <div className={styles.our_achievements_allinfos_container}>
              <div className={styles.our_achievements_allinfos_container_achievements}>
                <h1>
                  <HiOutlineTrophy /> - 2021
                </h1>
                <p>
                  <strong>Tarja Preta 3º edição: </strong>
                  O Coletivo Monomito realiza a terceira
                  edição do Projeto Tarja Preta onde aumentamos a aposta e o
                  desafio de ampliar o acesso durante a pandemia e registramos e
                  geramos renda para 32 poetas.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.our_achievements_allinfos_container}>
              <div className={styles.our_achievements_allinfos_container_achievements}>
                <h1>
                  <HiOutlineTrophy /> - 2022
                </h1>
                <p>
                  <strong>Prêmio LED Rede Globo: </strong>
                  fomos indicados no Prêmio LED Luz 
                  na educação com o projeto educacional Tarja Preta.
                </p>
              </div>
            </div>
            <div className={styles.our_achievements_allinfos_container}>
              <div className={styles.our_achievements_allinfos_container_achievements}>
                <h1>
                  <HiOutlineTrophy /> - 2022
                </h1>
                <p>
                  <strong>46º Mostra Internacional de Cinema de São Paulo: </strong>
                  Como expositores em parceria com a SPCine, Instituto Criar e Adesampa.
                </p>
              </div>
            </div>
            <div className={styles.our_achievements_allinfos_container}>
              <div className={styles.our_achievements_allinfos_container_achievements}>
                <h1>
                  <HiOutlineTrophy /> - 2023
                </h1>
                <p>
                  <strong>Expo Favela: </strong>
                  Fomos selecionados mais uma vez para expor e fazer 
                  uma participação no meet sobre mercado de economia criativa.
                </p>
              </div>
            </div>
            <div className={styles.our_achievements_allinfos_container}>
              <div className={styles.our_achievements_allinfos_container_achievements}>
                <h1>
                  <HiOutlineTrophy /> - 2024
                </h1>
                <p>
                  <strong>SXSW24: </strong>
                  Fomos convidados pela ADESampa para 
                  participar do painel da CasaSP sobre economia criativa.
                </p>
              </div>
            </div>
            <div className={styles.our_achievements_allinfos_container}>
              <div className={styles.our_achievements_allinfos_container_achievements}>
                <h1>
                  <HiOutlineTrophy /> - 2021
                </h1>
                <p>
                  <strong>Tarja Preta 4º edição: </strong>
                  Nesta edição estamos preparando a produção de 
                  20 mini documentários de poetas e artistas periféricos 
                  da cidade, culminando na mostra Tarja Preta e no lançamento 
                  do livro do projeto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
