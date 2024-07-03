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
            Somos uma produtora audiovisual com foco em impacto social. Produzimos filmes
            publicitários, institucionais, vídeos de treinamento, comunicação interna, cobertura de
            eventos e outros produtos para comunicação audiovisual do seu negócio.
          </p>
        </div>
      </div>
      <div className={styles.about_monomito_texts}>
        <h2>Nossa Jornada</h2>

        <div>
          <p>
            Com 7 anos no mercado de produção audiovisual, acumulamos uma expertise sólida e
            resultados comprovados. 
          </p>  
          <p>
            Acreditamos no poder transformador da produção audiovisual 
            e buscamos criar mudanças positivas por meio de nossos projetos. Nossa equipe especializada 
            e nossos recursos técnicos nos permitem entregar resultados de alta qualidade. Junte-se a nós 
            para contar histórias que inspiram e impactam o mundo.
          </p>

          <Link href="/sobre">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
};
