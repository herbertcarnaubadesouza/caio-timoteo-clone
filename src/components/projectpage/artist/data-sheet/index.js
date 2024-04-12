"use client";
import Image from "next/image";
import styles from "./styles.module.css";

export const DataSheet = ({ artist }) => {
    return (
        <section className={styles.datasheet_section}>
            <div className={styles.datasheet_section_wrapper}>
               <div className={styles.datasheet_section_wrapper_header}>
                    <h2 className={styles.datasheet_section_wrapper_title}>
                        Ficha
                    </h2>
                    <h2 className={styles.datasheet_section_wrapper_title}>
                        Técnica
                    </h2>
                    <p className={styles.datasheet_section_wrapper_subtitle}>
                        {artist.artistName}
                    </p>
               </div>
               <div className={styles.datasheet_section_wrapper_gridcontainer}>
                    <div className={styles.datasheet_section_wrapper_gridcontainer_item}>
                        <div>
                            <h3>
                                Direção Fotográfica
                            </h3>
                            <p>
                                {artist.artistPhotograpyDirection}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Diretor Executivo
                            </h3>
                            <p>
                                {artist.artistCEO}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Direção de Produção
                            </h3>
                            <p>
                                {artist.artistProductionDirector}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Foco
                            </h3>
                            <p>
                                {artist.artistFocus}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Operador de Câmera
                            </h3>
                            <p>
                                {artist.artistCameraOperator}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Gaffer
                            </h3>
                            <div>
                                {artist.artistGaffer.map((gaffer, index) => (
                                    <p key={index}>
                                        {gaffer}
                                    </p>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className={styles.datasheet_section_wrapper_gridcontainer_item}>
                        <div>
                            <h3>
                                Direção de arte
                            </h3>
                            <p>
                                {artist.artistArtDirection}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Produção
                            </h3>
                            <div>
                                {artist.artistProduction.map((production, index) => (
                                    <p key={index}>
                                        {production}
                                    </p>
                                ))}

                            </div>
                        </div>
                        <div>
                            <h3>
                                Maquiagem
                            </h3>
                            <p>
                                {artist.artistMakeUp}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Figurino
                            </h3>
                            <p>
                                {artist.artistCostume}
                            </p>
                        </div>
                    </div>
                    <div className={styles.datasheet_section_wrapper_gridcontainer_item}>
                        <div>
                            <h3>
                                Direção Fotográfica
                            </h3>
                            <p>
                                {artist.artistPhotograpyDirection}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Diretor Executivo
                            </h3>
                            <p>
                                {artist.artistCEO}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Direção de Produção
                            </h3>
                            <p>
                                {artist.artistProductionDirector}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Foco
                            </h3>
                            <p>
                                {artist.artistFocus}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Operador de Câmera
                            </h3>
                            <p>
                                {artist.artistCameraOperator}
                            </p>
                        </div>
                        <div>
                            <h3>
                                Gaffer
                            </h3>
                            <div>
                                {artist.artistGaffer.map((gaffer, index) => (
                                    <p key={index}>
                                        {gaffer}
                                    </p>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/ficha-tecnica.png"
                            width={500}
                            height={500}
                            alt="Ficha Tecnica"
                            title="Ficha Tecnica"
                            layout="responsive"
                        />
                    </div>
               </div>
            </div>
        </section>
    );
};