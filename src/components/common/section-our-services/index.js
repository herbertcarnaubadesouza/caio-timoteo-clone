"use client";
import { SlGraph } from "react-icons/sl";
import { FaCameraRetro } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { LiaCommentsSolid } from "react-icons/lia";
import { BsFillWebcamFill } from "react-icons/bs";
import { MdEvent } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";
import { MdRocketLaunch } from "react-icons/md";
import { SiSocialblade } from "react-icons/si";
import styles from "./styles.module.css"

export const SectionOurServices = () => {
    return (
        <section className={styles.ourServives}>
            <div className={styles.ourServives_title}>
                <h2>
                    Transforme suas ideias em videos criativos
                </h2>
            </div>
            <div className={styles.ourServives_wrapper}>
                <div className={styles.ourServives_item}>
                    <div className={styles.ourServives_item_icon}>
                        <SlGraph />
                    </div>
                    <div className={styles.ourServives_item_texts}>
                        <h3>
                            Consultoria
                        </h3>
                        <p>
                            Encontramos a melhor solução para comunicação em 
                            audiovisual para comunicar o que você precisa.
                        </p>
                    </div>
                </div>
                <div className={styles.ourServives_item}>
                    <div className={styles.ourServives_item_icon}>
                        <FaCameraRetro />
                    </div>
                    <div className={styles.ourServives_item_texts}>
                        <h3>
                            Produção de conteúdo
                        </h3>
                        <p>
                            Mostre sua ideia com audiovisual, a ferramenta 
                            de comunicação mais importante do século.
                        </p>
                    </div>
                </div>
                <div className={styles.ourServives_item}>
                    <div className={styles.ourServives_item_icon}>
                        <GrWorkshop />
                    </div>
                    <div className={styles.ourServives_item_texts}>
                        <h3>
                            Institucional
                        </h3>
                        <p>
                            Conte e conecte a história do seu negócio e 
                            atuação com seu público
                        </p>
                    </div>
                </div>
                <div className={styles.ourServives_item}>
                    <div className={styles.ourServives_item_icon}>
                        <LiaCommentsSolid />
                    </div>
                    <div className={styles.ourServives_item_texts}>
                        <h3>
                            Manifesto
                        </h3>
                        <p>
                            Missão, visão e valores. Comunique o que te move, 
                            com emoção envolvendo seu público.
                        </p>
                    </div>
                </div>
                <div className={styles.ourServives_item}>
                    <div className={styles.ourServives_item_icon}>
                        <BsFillWebcamFill />
                    </div>
                    <div className={styles.ourServives_item_texts}>
                        <h3>
                            Webséries
                        </h3>
                        <p>
                            Sequência de vídeos para engajar e produzir 
                            uma jornada com seu público.
                        </p>
                    </div>
                </div>
                <div className={styles.ourServives_item}>
                    <div className={styles.ourServives_item_icon}>
                        <MdEvent />
                    </div>
                    <div className={styles.ourServives_item_texts}>
                        <h3>
                            Eventos
                        </h3>
                        <p>
                            Cobertura de eventos, palestras e feiras em foto e 
                            vídeo, com entregas rápidas para seu público saber 
                            ou lembrar tudo que aconteceu no seu evento.
                        </p>
                    </div>
                </div>
                <div className={styles.ourServives_item}>
                    <div className={styles.ourServives_item_icon}>
                        <LuWorkflow />
                    </div>
                    <div className={styles.ourServives_item_texts}>
                        <h3>
                            Comunicação interna
                        </h3>
                        <p>
                            Fale com seus colaboradores do jeito certo e sem ruídos.
                        </p>
                    </div>
                </div>
                <div className={styles.ourServives_item}>
                    <div className={styles.ourServives_item_icon}>
                        <MdRocketLaunch />
                    </div>
                    <div className={styles.ourServives_item_texts}>
                        <h3>
                            Publicitário
                        </h3>
                        <p>
                            Divulgue sua marca ou seu produto e fale diretamente com seu público.
                        </p>
                    </div>
                </div>
                <div className={styles.ourServives_item}>
                    <div className={styles.ourServives_item_icon}>
                        <SiSocialblade />
                    </div>
                    <div className={styles.ourServives_item_texts}>
                        <h3>
                            Redes sociais
                        </h3>
                        <p>
                            Vídeos para influenciadores ou comunicações que necessitam 
                            de velocidade e direcionamentos que podem pivotar para mudar 
                            os resultados.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}