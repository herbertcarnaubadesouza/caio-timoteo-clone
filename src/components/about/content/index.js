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
                <div className={styles.about_lastYears}>
                    <div>
                        <h2>Nossa</h2>
                        <h2>Jornada</h2>
                        <div className={styles.about_lastYears_texts}>
                            <h3>
                                2017
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        Fundação: Iniciamos nossas atividades com o Monomito Road trip
                                        Batalha do tank vs SP, levando 50 jovens de diversas periferias 
                                        de São Paulo para participar da maior batalha de RAP do Brasil, 
                                        no RJ em São Gonçalo.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Projeto Tarja Preta: Estabelecemos a biblioteca audiovisual 
                                        de poetas marginais (SLAM).
                                    </p>
                                </li>
                            </ul>

                            <h3>
                                2018
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        Projeto Tarja Preta: Ampliamos para alcançar 100 poetas.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Coletivo Monomito: Instituímos com o objetivo de fomentar a arte 
                                        e cultura de artistas independentes.
                                    </p>
                                </li>
                            </ul>

                            <h3>
                                2019
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        Tarja Preta 2º edição: Realizamos a segunda edição do Projeto 
                                        Tarja Preta, com a participação de mais de 64 poetas de diversas
                                        periferias de São Paulo.
                                    </p>
                                </li>
                            </ul>

                            <h3>
                                2020
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        ANIP Aceleração: Entre 34 negócios fomos destaque junto com outros
                                        4 iniciativas na aceleração de negócios de impacto social, realizada 
                                        pela A Banca, Artemísia e FGV.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        VaiTec 5º edição: Fomos aprovados na quinta edição do programa de
                                        aceleração de negócios da Agência de Desenvolvimento de São Paulo.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Filme Pipa: Lançamos nosso primeiro curtametragem &quot;PIPA&quot;, dirigido e
                                        roteirizado por Juliana Jesus lançado pelo projeto Curta em Casa do 
                                        Instituto Criar.
                                    </p>
                                </li>
                            </ul>

                            <h3>
                                2021
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        Tarja Preta 3º edição: Realizamos a terceira edição do Projeto 
                                        Tarja Preta, aumentando o acesso durante a pandemia de covid19 
                                        e gerando renda para 32 poetas.
                                    </p>
                                </li>
                            </ul>

                            <h3>
                                2022
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        Ganhamos menção honrosa na 8.a Edição do festival Francês MegaCities 
                                        ShortDocs de curtas metragens com o curta Amazônia passa aqui de 
                                        direção da Aline Cavalcanti Mendonça.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Amplifica Cine: Participamos da aceleração de negócios de audiovisual 
                                        pela ADESAMPA e SPCINE.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Ventana Sur Buenos Aires: Participamos do maior festival de cinema 
                                        da América Latina na Argentina.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Prêmio LED Rede Globo: Indicados no Prêmio LED Luz na Educação com 
                                        o projeto educacional Tarja Preta.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Expo Favela: Selecionados e participamos do maior evento de inovação 
                                        das favelas, com realização da CUFA.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Pixel Show: Convidados a participar da Pixel, reconhecido festival 
                                        internacional de criatividade.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        46ª Mostra Internacional de Cinema de São Paulo: Expositores em parceria 
                                        com a SPCine, Instituto Criar e ADESAMPA.
                                    </p>
                                </li>
                            </ul>

                            <h3>
                                2023
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        SXSW 23: Participação no maior evento de inovação e criatividade do mundo 
                                        em Austin, Texas (ADESAMPA / SPCine).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Sebrae for Startups Ginga Afro Tech Hub: Aceleração pela rede de mentores 
                                        do Sebrae, focada em empresas lideradas por pessoas negras.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Web Summit Lisboa: Participação no Web Summit, principal evento de inovação 
                                        para negócios em fase de internacionalização (ADESAMPA).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Expo Favela: Selecionados novamente para expor e participar de um meet 
                                        sobre mercado de economia criativa.
                                    </p>
                                </li>
                            </ul>

                            <h3>
                                2024
                            </h3>
                            <ul>
                                <li>
                                    <p>
                                        SXSW 24: Convidados pela ADESAMPA para participar do painel da CasaSP 
                                        sobre economia criativa, no maior evento de inovação e criatividade do mundo.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        GrowthXP Sebrae for Startups: Sendo acelerados pelo time de startups do Sebrae, 
                                        com acesso à rede de mentores especializados em negócios de impacto.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Tarja Preta 4º edição: Produção de 20 mini documentários de poetas e artistas 
                                        periféricos, culminando na mostra Tarja Preta e no lançamento do livro do projeto.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Lab Monomito: Criação do Lab Monomito, hub de criatividade audiovisual na zona 
                                        leste de São Paulo, promovendo acesso ao audiovisual para jovens e pequenos 
                                        empreendedores de territórios de periferia e favela.
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