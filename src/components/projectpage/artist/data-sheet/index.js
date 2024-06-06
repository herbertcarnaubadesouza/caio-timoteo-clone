"use client";
import Image from "next/image";
import styles from "./styles.module.css";

export const DataSheet = ({ project }) => {
  return (
    <section className={styles.datasheet_section}>
      <div className={styles.datasheet_section_wrapper}>
        <div className={styles.datasheet_section_wrapper_header}>
          <h2 className={styles.datasheet_section_wrapper_title}>Ficha</h2>
          <h2 className={styles.datasheet_section_wrapper_title}>Técnica</h2>
          <p className={styles.datasheet_section_wrapper_subtitle}>
            {project.projectName}
          </p>
        </div>
        <div className={styles.datasheet_section_wrapper_gridcontainer}>
          <div className={styles.datasheet_section_wrapper_gridcontainer_item}>
            <div>
              <h3>Direção Fotográfica</h3>
              <p>{project.projectPhotograpyDirection}</p>
            </div>
            <div>
              <h3>Diretor Executivo</h3>
              <p>{project.projectCEO}</p>
            </div>
            <div>
              <h3>Direção de Produção</h3>
              <p>{project.projectProductionDirector}</p>
            </div>
            <div>
              <h3>Foco</h3>
              <p>{project.projectFocus}</p>
            </div>
            <div>
              <h3>Operador de Câmera</h3>
              <p>{project.projectCameraOperator}</p>
            </div>
            <div>
              <h3>Gaffer</h3>
              <div>
                {project.projectGaffer.map((gaffer, index) => (
                  <p key={index}>{gaffer}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.datasheet_section_wrapper_gridcontainer_item}>
            <div>
              <h3>Direção de arte</h3>
              <p>{project.projectArtDirection}</p>
            </div>
            <div>
              <h3>Produção</h3>
              <div>
                {project.projectProduction.map((production, index) => (
                  <p key={index}>{production}</p>
                ))}
              </div>
            </div>
            <div>
              <h3>Maquiagem</h3>
              <p>{project.projectMakeUp}</p>
            </div>
            <div>
              <h3>Figurino</h3>
              <p>{project.projectCostume}</p>
            </div>
          </div>
          <div className={styles.datasheet_section_wrapper_gridcontainer_item}>
            <div>
              <h3>Direção Fotográfica</h3>
              <p>{project.projectPhotograpyDirection}</p>
            </div>
            <div>
              <h3>Diretor Executivo</h3>
              <p>{project.projectCEO}</p>
            </div>
            <div>
              <h3>Direção de Produção</h3>
              <p>{project.projectProductionDirector}</p>
            </div>
            <div>
              <h3>Foco</h3>
              <p>{project.projectFocus}</p>
            </div>
            <div>
              <h3>Operador de Câmera</h3>
              <p>{project.projectCameraOperator}</p>
            </div>
            <div>
              <h3>Gaffer</h3>
              <div>
                {project.projectGaffer.map((gaffer, index) => (
                  <p key={index}>{gaffer}</p>
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
