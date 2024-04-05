"use client"
import Image from "next/image";
import styles from "./styles.module.css";

export const AboutContent = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about_wrapper}>
                <div className={styles.about_title}>
                    <h1>
                        Quem Somos
                    </h1>
                </div>
                <div className={styles.about_logo}>
                    <Image
                        src="/logo_monomito.png"
                        width={500}
                        height={500}
                        alt="Monomito Filmes"
                        title="Monomito Filmes"
                    />
                </div>
                <div className={styles.about_shortDescription}>
                    <p>
                        Nascida na periferia de SP, com foco em contar novas histórias, 
                        mais diversas, com um olhar voltado a lugares que há muito não 
                        tiveram atenção.
                    </p>
                </div>
                <div className={styles.about_description}>
                    <div>
                        <h2>O que</h2>
                        <h2>Fazemos</h2>
                        <div className={styles.about_description_texts}>
                            <p>
                                Monomito Filmes é uma produtora audiovisual de impacto, situada no 
                                bairro do Itaim Paulista, Zona Leste da Cidade de São Paulo, desde 
                                2017 atuamos afim de democratizar o acesso à produção audiovisual 
                                para empresas, artistas e criadores da periferia.
                            </p>
                            <p>
                                Acreditamos que a produção audiovisual é uma ferramenta importante para 
                                construção de uma economia mais abrangente e acessível, assim realizamos 
                                diversos projetos que vão desde formações até produções sociais. Desde o 
                                início das nossas atividades já impactamos com nossos projetos mais de 250 
                                pessoas.
                            </p>
                            <p>
                                Com 4 anos de jornada em produção audiovisual, contamos com uma equipe 
                                treinada e especializada, equipamentos compatíveis com o mercado e métodos 
                                de produção eficientes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};