"use client";
import Link from "next/link";
import styles from "./styles.module.css";

export const SectionAboutMonomito = () => {
  return (
    <section className={styles.about_monomito}>
      <div className={styles.about_monomito_texts}>
        <h2>Sobre a Monomito Filmes</h2>

        <div>
          <p>
            A Monomito Filmes é uma produtora audiovisual com foco em impacto
            social. Produzimos filmes publicitários, institucionais, vídeos de
            treinamento, comunicação interna, cobertura de eventos e outros
            produtos para comunicação audiovisual do seu negócio.
          </p>
        </div>
      </div>
      <div className={styles.about_monomito_texts}>
        <h2>Nossa Jornada</h2>

        <div>
          <p>
            Com 4 anos de jornada em produção audiovisual, contamos com uma equipe 
            treinada e especializada, equipamentos compatíveis com o mercado e métodos 
            de produção eficientes. Estamos mais do que preparados em atender suas expectativas, 
            ao longos deste 4 anos tivemos muitos feitos e experiências que foram reconhecidas através 
            de diversas indicações à prêmios e eventos de muita importância para o mercado audiovisual.
          </p>

          <Link href="/sobre">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
};
