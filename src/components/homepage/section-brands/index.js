"use client"
import Image from "next/image";
import styles from "./styles.module.css"

export const SectionBrands = () => {
    return (
        <section className={styles.section_brands}>
            <div className={styles.section_brands_title}>
                <h2>
                    Trabalhamos com grandes marcas
                </h2>
            </div>
            <div className={styles.section_brands_wrapper}>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/marca-carrefour.png"
                        alt="Carrefour"
                        title="Carrefour"
                        width={130}
                        height={100}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/marca-danone.png"
                        alt="Danone"
                        title="Danone"
                        width={180}
                        height={60}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/marca-amazon.png"
                        alt="Amazon"
                        title="Amazon"
                        width={180}
                        height={50}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/marca-google.png"
                        alt="Google"
                        title="Google"
                        width={220}
                        height={60}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/marca-meta.png"
                        alt="Meta"
                        title="Meta"
                        width={200}
                        height={40}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/marca-pg.png"
                        alt="P&G"
                        title="P&G"
                        width={130}
                        height={60}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/marca-boticario.png"
                        alt="O Boticário"
                        title="O Boticário"
                        width={220}
                        height={40}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/marca-sorriso.png"
                        alt="Sorriso"
                        title="Sorriso"
                        width={200}
                        height={60}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/marca-tatuape-conceito.png"
                        alt="Tatuapé Conceito"
                        title="Tatuapé Conceito"
                        width={150}
                        height={100}
                    />
                </div>
                <div className={styles.section_brands_item}>
                    <Image
                        src="/marca-accor.png"
                        alt="Accor"
                        title="Accor"
                        width={150}
                        height={120}
                    />
                </div>
            </div>
        </section>
    )
}